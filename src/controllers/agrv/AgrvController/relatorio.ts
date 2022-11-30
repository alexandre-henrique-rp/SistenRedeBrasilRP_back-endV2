import { Op } from 'sequelize';
import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const AgrvRelat = async (req: Request, res: Response) => {
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
    ],
    where: {
      unidade: req.params.polo,
      scp: 'A PAGAR',
      estatos_pgto: 'Pago',
      andamento: {
        [Op.or]: ['EMITIDO', 'APROVADO'],
      },
    },
  })
    .then((agrv: any) => {
      res.status(200).json(agrv);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(400).send(err);
    });
};
