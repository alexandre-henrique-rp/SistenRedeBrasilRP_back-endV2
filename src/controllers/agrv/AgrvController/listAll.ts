import { Op } from 'sequelize';
import { Agrv } from '../../../database/models/agrv';
import { Request, Response } from 'express';

export const AgrvAll = async (req: Request, res: Response) => {
  await Agrv.findAll({
    attributes: [
      'idagrv',
      'nome',
      'numeropolo',
      'permissaoacesso',
      'painel_agrv',
    ],
    where: {
      permissaoacesso: {
        [Op.or]: ['TOTEN', 'PERMITIDO', 'NEGADO'],
      },
    },
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
