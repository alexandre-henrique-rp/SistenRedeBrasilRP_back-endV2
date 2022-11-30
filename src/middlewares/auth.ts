import { NextFunction, Request, Response } from 'express';
import jwt, { verify } from 'jsonwebtoken';


export const eAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authheader = req.headers.authorization;
  if (!authheader) {
    return res.status(400).send({
      error: true,
      message: 'Token nao informado',
    });
  }
  const [, token] = authheader.split(' ');
  if (!token) {
    return res.status(400).send({
      error: true,
      message: 'token incoreto',
    });
  }
  try {
    await jwt.verify(token, process.env.SECRET) ;
    next();
  } catch (err) {
    return res.status(400).send({
      error: true,
      message: 'token expirado',
    });
  }
};
