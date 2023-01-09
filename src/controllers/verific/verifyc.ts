import 'dotenv/config'
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { Agr } from '../../database/models/agr';

export const VerificToken = async (req: Request, res: Response) => {
  const authheader = req.headers.authorization;
  const [, token] = authheader.split(' ');
  const decoded = jwt.verify(token, process.env.SECRET) as any;
  if (!decoded) return res.status(400).send('tokem não autorizado');
  Agr.findOne({
    attributes: ['idagr', 'nome', 'email', 'bloc_cont_obs'],
    where: {
      idagr: decoded.id,
    },
  })

    .then(
      (response: {
        bloc_cont_obs: string;
        idagr: any;
        nome: any;
        email: any;
      }) => {
        return res.status(200).json({
          user: {
            id: response.idagr,
            nome: response.nome,
            email: response.email,
            adm: response.bloc_cont_obs === '1' ? true : false,
          },
          token: token,
          authorization: true,
        });
      },
    )
    .catch(() => {
      return res.status(401).json({
        msg: 'Autorização Cancelada',
        authorization: false,
      });
    });
};
