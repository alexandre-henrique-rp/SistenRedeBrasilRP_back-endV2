import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';
import { RespostaCobre } from '../../../lib/cobranca/respcobre';

export const ListBoletoGerado = async (req: Request, res: Response) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth() - 11, 1);

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
    ],
    order: [['id', 'DESC']],
    where: {
      andamento: {
        [Op.or]: ['EMITIDO', 'APROVADO'],
      },
      formapgto: 'BOLETO',
      dt_aprovacao: {
        [Op.gte]: firstDay,
      },
    },
    // limit: 1000,
  })
    .then(async (response: any) => {
      console.log(response.length);
      const total = response
        .map((v: { valorcd: string }) =>
          v.valorcd === '' ? parseInt('0') : parseInt(v.valorcd),
        )
        .reduce((acc: any, p: any) => acc + p);

      const resp = await RespostaCobre(response);

      const respMap = resp.map((item) => {
        return {
          id: item.id,
          nome: item.nome,
          certificado: item.certificado,
          telefone: item.telefone,
          valor: item.valor,
          contabilidade: item.contabilidade,
          status: 'Ainda não Venceu',
        };
      });
      res.status(200).json({
        total: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        data: respMap,
      });
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
