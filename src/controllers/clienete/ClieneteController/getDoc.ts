import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';

export const GetDoc = async (req: Request, res: Response) => {
  const doc = req.params.doc;
  if (doc.length < 14) {
    await Fcweb.findOne({
      where: {
        cpf: {
          [Op.like]: doc,
        },
      },
    })
      .then((response: any) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  } else {
    await Fcweb.findOne({
      where: {
        cnpj: {
          [Op.like]: doc,
        },
      },
    })
      .then((response: any) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  }
};
