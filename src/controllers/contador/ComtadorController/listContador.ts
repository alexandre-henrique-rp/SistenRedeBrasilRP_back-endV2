import { Request, Response } from 'express';
import { Contador } from '../../../database/models/Contador';


export const ContList = async (req: Request, res: Response) => {
  await Contador.findAll({
    attributes: ["codigo", "nome"]
  })
    .then((contador) => {
      res.status(200).json(contador);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
};