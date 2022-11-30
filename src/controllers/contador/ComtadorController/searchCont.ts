import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Contador } from '../../../database/models/Contador';

export const ContSearch = async (req: Request, res: Response) => {
  const contador = await Contador.findOne({
    attributes: [`unidade`, `nome`, `fone`, `email`, `whatsapp`],
    where: {
      nome: {
        [Op.like]: req.body.contador,
      },
    },
  })
    .then((contador) => {
      res.status(200).send(contador);
    })
    .catch((err) => {
      console.log(err);
    });
};
