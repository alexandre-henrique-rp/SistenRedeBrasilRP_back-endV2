import { Request, Response } from 'express';
import { Agrv } from '../../../database/models/agrv';

export const MaxPolo = async (req: Request, res: Response) => {
  await Agrv.findAll({
    attributes: ['idagrv', 'nome', 'numeropolo'],
  })
    .then((agrv: any) => {
      res.status(200).json(agrv);
      console.log(agrv);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(400).json(err);
    });
};
