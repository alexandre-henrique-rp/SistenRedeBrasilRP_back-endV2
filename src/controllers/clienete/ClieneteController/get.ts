import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';

export const Get = async (req: Request, res: Response) => {
  const date2 = new Date();
  date2.setMonth(date2.getMonth() - 10);
  const day1 = date2.getDay() < 10 ? '0' + date2.getDay() : date2.getDay();
  const month1 =
    date2.getMonth() < 10 ? '0' + date2.getMonth() : date2.getMonth();
  const year1 = date2.getFullYear();
  const dateString1 = `${day1}-${month1}-${year1} 03:00:00`;
  console.log(dateString1);

  const firstDay = dateString1;
  await Fcweb.findAll({
    attributes: [
      'id',
      'unidade',
      'referencia',
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
      'vouchersoluti',
      'ct_parcela',
      'telefone',
      'telefone2',
      'email',
      'dtnascimento',
      'rg',
      'cei',
      'endereco',
      'nrua',
      'bairro',
      'complemento',
      'cep',
      'uf',
      'cidade',
      'vctoCD',
      'dt_aprovacao',
      'validacao',
      'dt_agenda',
      'hr_agenda',
      'reg_cnh',
    ],
    order: [['id', 'DESC']],
    where: {
      referencia: {
        [Op.gte]: firstDay,
      },
    },
    limit: 8000,
  })
    .then((response: any) => {
      console.log(response.length);
      res.status(200).json(response);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
