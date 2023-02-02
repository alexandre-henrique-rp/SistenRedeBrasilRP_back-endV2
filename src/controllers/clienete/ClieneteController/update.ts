import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const UpdateCliente = async (req: Request, res: Response) => {
  var dados = req.body;
  await Fcweb.update(dados, {
    where: {
      id: req.params.id,
    },
  })
    .then((resp: any) => {
      return res.status(201).json({
        message: 'Dados do Cliente atualizado com sucesso!',
        data: resp.data,
      });
    })
    .catch((err: any) => {
      return res.status(400).json({
        message: 'Erro: Não foi possível atualizar os dados Cliente!',
        data: err.original,
      });
    });
};
