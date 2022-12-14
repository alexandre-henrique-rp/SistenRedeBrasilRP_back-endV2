import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const Create = async (req: Request, res: Response) => {
  const dados = req.body;

  await Fcweb.create(dados)
    .then((response: { data: any }) => {
      return res.status(200).json({
        msg: 'Cliente cadastrado com sucesso!',
        data: response.data,
      });
    })
    .catch((err: any) => {
      return res.status(400).json({
        msg: 'Erro: Não foi possível cadastrar o Cliente!',
        error: err,
      });
    });
};
