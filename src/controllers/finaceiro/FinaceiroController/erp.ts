import { Request, Response } from 'express';
import { Erp } from '../../../database/models/erp';


export const FinacErp = async (req: Request, res: Response) => {
  await Erp.findAll({
    where: {
      status: 1,
    },
  })
    .then(async (response: any[]) => {
      return res.status(200).json(response);
    })
    .catch((err: any) => {
      return res.status(400).json({
        message: 'Erro: Não foi possível comunicar com servidor!',
        erro: err,
      });
    });
};
