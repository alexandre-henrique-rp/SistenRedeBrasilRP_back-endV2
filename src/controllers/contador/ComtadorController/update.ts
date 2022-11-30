import { Request, Response } from 'express';
import { Contador } from '../../../database/models/Contador';



export const ContUpdate = async (req: Request, res: Response) => {
  const dados = req.body;
  await Contador.update(dados, {
    where: {
      idagrv: req.params.id
    }
  })
    .then(() => {
      return res.status(201).json({
        message: "Contador atualizado com sucesso!"
      });
    })
    .catch(() => {
      return res.status(400).json({
        message: "Erro: Não foi possível atualizar o Contador!"
      });
    });
};