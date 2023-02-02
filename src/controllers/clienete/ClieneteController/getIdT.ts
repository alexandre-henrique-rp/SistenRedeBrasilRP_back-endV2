import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';

export const GetIdT = async (req: Request, res: Response) => {
  await Fcweb.findOne({
    where: {
        id: {
          [Op.like]: req.params.id,
        },
      },
  })
    .then((response: any) => {
      console.log(response)
      res.status(200).json(response);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};