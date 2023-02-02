import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';

export const Get = async (req: Request, res: Response) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth() - 11, 1);
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
      'id_fcw_soluti',
      'validacao',
      'dt_agenda',
      'hr_agenda',
      'reg_cnh',
    ],
    order: [['id', 'DESC']],
    where: {
      dt_aprovacao: {
        [Op.gte]: firstDay,
      },
      id_fcw_soluti: {
        [Op.ne]: [''],
      },
    },
    
  })
    .then((response: any) => {
      console.log(response.length);
      res.status(200).json(response);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
