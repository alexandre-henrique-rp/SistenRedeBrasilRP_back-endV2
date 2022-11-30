import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Agr } from '../database/models/agr';

export const verifyADM = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authheader = req.headers.authorization;
  if (!authheader) {
    return res.status(400).send({
      error: true,
      message: 'Token não localizado',
    });
  }
  const [, token] = authheader.split(' ');

  if (!token) {
    return res.status(400).send({
      error: true,
      message: 'Token invalido',
    });
  }

  const decode = jwt.verify(token, process.env.SECRET) as any;
  const agr = await Agr.findOne({
    attributes: ['idagr', 'nome', 'email', 'bloc_cont_obs'],
    where: {
      idagr: decode.id,
    },
  });
  if (agr.dataValues.bloc_cont_obs === '1') {
    return next();
  } else {
    console.log(
      'voce não tem permissão para executar essa ação..  Consulte o ADM',
    );
    return res
      .status(401)
      .send('voce não tem permissão para executar essa ação..  Consulte o ADM');
  }
};
