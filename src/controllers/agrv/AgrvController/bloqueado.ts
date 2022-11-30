import { Agrv } from '../../../database/models/agrv';
import { Request, Response } from 'express';

export const BlocAgrv = async (req: Request, res: Response) => {
  var dados = req.body;
  dados.permissaoacesso = 'NEGADO';
  await Agrv.update(dados, {
    attributes: [
      'idagrv',
      'nome',
      'cpf',
      'nascimento',
      'rg',
      'logradouro',
      'numero',
      'complemento',
      'bairro',
      'cep',
      'municipio',
      'uf',
      'whatsapp',
      'chavepix',
      'tipopix',
      'numeropolo',
      'a1pj_12m',
      'a3pj_36m',
      'a1pf_12m',
      'a3pf_36m',
      'nomepolo',
      'ufpolo',
      'permissaoacesso',
    ],
    where: {
      idagrv: req.params.id,
    },
  })
    .then(() => {
      return res.json({
        message: 'Revendedor atualizado com sucesso!',
      });
    })
    .catch(() => {
      return res.status(400).json({
        message: 'Erro: Não foi possível atualizar o Revendedor!',
      });
    });
};
