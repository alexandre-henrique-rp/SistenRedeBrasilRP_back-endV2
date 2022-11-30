import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { Agr } from '../../database/models/agr';

export const VerificToken = async (req: Request, res: Response) => {
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const authheader = req.headers.authorization;
  const [, token] = authheader.split(' ');
  const decoded = jwt.verify(token, process.env.SECRET) as any;
  if (!decoded) return res.status(401).send('tokem não autorizado');
  Agr.findOne({
    attributes: ['idagr', 'nome', 'email', 'bloc_cont_obs'],
    where: {
      idagr: decoded.id,
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
};
