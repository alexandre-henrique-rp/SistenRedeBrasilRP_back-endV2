import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';
import { RespostaCobre } from '../../../lib/cobranca/respcobre';

export const ListBoletoAberto = async (req: Request, res: Response) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth() - 11, 1);
  console.log(firstDay);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toISOString();

  await Fcweb.findAll({
    attributes: [
      'id',
      'responsavel',
      'andamento',
      'cpf',
      'cnpj',
      'nome',
      'razaosocial',
      'contador',
      'obscont',
      'tipocd',
      'valorcd',
      'estatos_pgto',
      'formapgto',
      'telefone',
      'email',
      'dtnascimento',
      'vctoCD',
      'dt_aprovacao',
      'validacao',
      'vectoboleto',
    ],
    order: [['id', 'DESC']],
    where: {
      andamento: {
        [Op.or]: ['EMITIDO', 'APROVADO'],
      },
      formapgto: {
        [Op.or]: ['BOLETO', 'BOLETO-BRA'],
      },
      dt_aprovacao: {
        [Op.gte]: firstDay,
      },
      estatos_pgto: {
        [Op.ne]: 'Pago',
      },
      vectoboleto: {
        [Op.lt]: today,
      },
    },
  })
    .then(async (response: any) => {
      console.log(response.length);
      const total = response
        .map((v: { valorcd: string }) =>
          v.valorcd === '' ? parseInt('0') : parseInt(v.valorcd),
        )
        .reduce((acc: any, p: any) => acc + p);

      const resp = await RespostaCobre(response);

      res.status(200).json({
        total: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        data: resp,
      });
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
