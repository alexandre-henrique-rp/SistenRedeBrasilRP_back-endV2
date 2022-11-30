import { Request, Response } from "express";
import { Op } from "sequelize";
import { Fcweb } from "../../../database/models/fcweb";
import { ValorCobr } from "../../../lib/cobranca/calculos/valorcobr";


export const FinacCobranca = async (req: Request, res: Response) => {
  const periodo: any = new Date();
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
      'contador',
      'smspg',
    ],
    where: {
      unidade: 1,
      estatos_pgto: {
        [Op.or]: ['', 'Verificar', 'Falta pgto'],
      },
      andamento: {
        [Op.or]: ['EMITIDO', 'APROVADO'],
      },
      dt_aprovacao: {
        [Op.lte]: new Date(),
        [Op.gte]: new Date(periodo - 5 * 30 * 60 * 60 * 60 * 1000),
      },
    },
  })
    .then(async (response: any[]) => {
      const valor = await ValorCobr(response);
      return res.status(200).json({
        data: response,
        quant: response.length,
        valor: valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      });
    })
    .catch((err: any) => {
      return res.status(400).json({
        message: 'Erro: Não foi possível comunicar com servidor!',
        erro: err,
      });
    });
}