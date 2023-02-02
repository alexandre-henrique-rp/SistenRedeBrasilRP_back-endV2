import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const GetClienteId = async (req: Request, res: Response) => {
  await Fcweb.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then(async (response: any) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
