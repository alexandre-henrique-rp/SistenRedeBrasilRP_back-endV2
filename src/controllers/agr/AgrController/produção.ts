import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';
import { ClienteBoleto } from '../../../lib/cliente/filterClienteBoleto';

export const Produção = async (req: Request, res: Response) => {
  const date2 = new Date();
  const datai = req.query.datai;
  const dataf = req.query.dataf;
  console.log(JSON.stringify(req.query.agr));
  const nome = JSON.stringify(req.query.agr).toUpperCase();

  await Fcweb.findAll({
    attributes: [
      'id',
      'referencia',
      'responsavel',
      'andamento',
      'nome',
      'vectoboleto',
      'razaosocial',
      'contador',
      'tipocd',
      'valorcd',
      'estatos_pgto',
      'formapgto',
      'telefone',
      'email',
      'dt_aprovacao',
    ],
    order: [['id', 'DESC']],
    where: {
      estatos_pgto: {
        [Op.ne]: 'Pago',
      },
      andamento: {
        [Op.or]: ['EMITIDO', 'APROVADO'],
        [Op.not]: 'PENDURA',
      },
      responsavel: JSON.parse(nome),
      dt_aprovacao: {
        [Op.gte]: datai, // dt_aprovacao >= filtro
        [Op.lte]: dataf, // dt_aprovacao <= filtro
      },
    },
  })
    .then(async (response: any) => {
      const result = await ClienteBoleto(response);
      res.status(200).json(result);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
