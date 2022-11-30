import { Request, Response } from 'express';
import { Agrv } from '../../../database/models/agrv';


export const AgrvUpdate = async (req: Request, res: Response) => {
  var dados = req.body;
  await Agrv.update(dados, {
    where: {
      idagrv: req.params.id
    }
  })
    .then(() => {
      return res.status(201).json({
        message: "Revendedor atualizado com sucesso!"
      });
    })
    .catch(() => {
      return res.status(400).json({
        message: "Erro: Não foi possível atualizar o Revendedor!"
      });
    });
};
