import { Op } from 'sequelize';
import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const ContListClient = async (req: Request, res: Response) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  await Fcweb.findAll({
    attributes: ['id', 'contador', 'tipocd', 'dt_aprovacao'],
    order: [['dt_aprovacao', 'DESC']],
    where: {
      contador: {
        [Op.like]: req.params.contador,
      },
      dt_aprovacao: {
        [Op.lte]: lastDay,
        [Op.gte]: firstDay,
      },
    },
  })
    .then((cliente: any) => {
      res.status(200).json(cliente);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
