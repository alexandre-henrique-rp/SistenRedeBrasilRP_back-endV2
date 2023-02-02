import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { Agr } from '../../database/models/agr';

export const VerificToken = async (req: Request, res: Response) => {
  const authheader = req.headers.authorization;
  const [, token] = authheader.split(' ');
  
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: 'Token não informado.' });
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).send('tokem não autorizado');
    }

    if (decoded) {
      const dec: any=  decoded
      const id = dec.id
      Agr.findOne({
        attributes: ['idagr', 'nome', 'email', 'bloc_cont_obs'],
        where: {
          idagr: id,
        },
      })
        .then((response: { idagr: any; nome: any; email: any; }) => {
          return res.status(200).json({
            user: {
              id: response.idagr,
              nome: response.nome,
              email: response.email,
            },
            token: token,
            authorization: true,
          });
        })
        .catch(() => {
          return res.status(401).json({
            msg: 'Autorização Cancelada',
            authorization: false,
          });
        });
    }
  });
};
