import { Request, Response } from 'express';

import { ERP } from '../../../database/models/erp';


export const ErpList = async (req: Request, res: Response) => {
  await ERP.findAll({
    attributes: ["id", "fantasia", "status", 'unidade'],
    where: {
      status: 1,
    }
  })
    .then((contador) => {
      res.status(200).json(contador);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
};