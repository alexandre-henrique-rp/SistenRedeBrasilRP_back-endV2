import { Op } from 'sequelize';
import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const ContListClient = async (req: Request, res: Response) => {

  await Fcweb.findAll({
    attributes: ['id', 'contador', 'tipocd', 'dt_aprovacao', 'comissaoparceiro', 'andamento', 'scp'],
    order: [['dt_aprovacao', 'DESC']],
    where: {
      contador: {
        [Op.substring]: req.params.contador,
      },
      scp: "A PAGAR",
      andamento:{
        [Op.or]: ['EMITIDO','APROVADO']
      }
    },
  })
    .then((cliente: any) => {
      console.log(cliente.length)
      res.status(200).json(cliente);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
