import { Request, Response } from "express";
import { Op } from "sequelize";
import { Fcweb } from "../../../database/models/fcweb";


export const CobrancaEmiss = async (req: Request, res: Response) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
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
      'tipocd',
      'validacao',
      'valorcd',
      'custocd',
      'dt_aprovacao',
      'formapgto',
      'id_fcw_soluti',
    ],
    where: {
      andamento: {
        [Op.or]: ['EMITIDO', 'APROVADO'],
      },
      id_fcw_soluti: {
        [Op.ne]: [''],
      },
      dt_aprovacao: {
        [Op.gte]: firstDay,
        [Op.lte]: lastDay,
      },
    },
  })
    .then((response: any) => {
      res.status(200).json(response);
    })
    .catch((err: any) => {
      return res.status(400).json({
        message: 'Erro: Não foi possível comunicar com servidor!',
        erro: err,
      });
    });
}