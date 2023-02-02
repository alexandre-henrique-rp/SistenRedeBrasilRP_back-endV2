import { Request, Response } from 'express';
import { ERP } from '../../../database/models/erp';


export const ErpUpdate = async (req: Request, res: Response) => {
  var dados = req.body;
  await ERP.update(dados, {
    where: {
      id: req.params.id
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
