import { Request, Response } from 'express';
import { ClienteNfe } from '../../../database/models/nfe';

export const NfeAllGet = async (req: Request, res: Response) => {
  await ClienteNfe.findAll({
    attributes: [
      'ID',
      'CPF',
      'CNPJ',
      'Cliente',
      'RAZAO',
      'Vencimento',
      'Valor',
      'LINK',
      'TEL1',
      'TEL2',
      'STATUS',
    ],
    where: {
      STATUS: 1,
    },
  })
    .then((nfe: any) => {
      res.status(200).json(nfe);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(400).json(err);
    });
};
