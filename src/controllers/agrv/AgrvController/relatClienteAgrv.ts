import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const RelatClientAgrv = async (req: Request, res: Response) => {
  await Fcweb.findAll({
    attributes: [
      'id',
      'nome',
      'razaosocial',
      'cnpj',
      'cpf',
      'unidade',
      'estatos_pgto',
      'andamento',
      'telefone',
      'scp',
      'custoCdpar',
      'tipocd',
      'valorcd',
      'custocd',
      'comissaoparceiro',
      'formapgto',
    ],
    where: {
      unidade: req.params.polo,
      scp: 'A PAGAR',
    },
  })
    .then((clientes: any) => {
      res.status(200).json(clientes);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(400).send(err);
    });
};
