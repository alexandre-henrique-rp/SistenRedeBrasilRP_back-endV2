import { Request, Response } from 'express';
import { Contador } from '../../../database/models/Contador';

export const ContCreate = async (req: Request, res: Response) => {
  const dados = req.body;
  await Contador.create(dados)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
