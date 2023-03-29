import { Op } from 'sequelize';
import { Request, Response } from 'express';
import { Fcweb } from '../../../database/models/fcweb';

export const ContListClient = async (req: Request, res: Response) => {
  const hoje = new Date(); // data atual
  const mesPassado = new Date(hoje.getFullYear(), hoje.getMonth() - 1, 1); // mês anterior com dia 1
  mesPassado.setDate(1); // altera o dia para o primeiro dia do mês passado

  await Fcweb.findAll({
    attributes: [
      'id',
      'contador',
      'tipocd',
      'dt_aprovacao',
      'comissaoparceiro',
      'andamento',
      'scp',
      'id_fcw_soluti',
      'estatos_pgto',
    ],
    order: [['dt_aprovacao', 'DESC']],
    where: {
      contador: {
        [Op.substring]: req.params.contador,
      },
      dt_aprovacao: {
        [Op.gte]: mesPassado,
      },
      estatos_pgto: 'Pago',
      scp: {
        [Op.ne]: 'PAGO',
      },
      id_fcw_soluti: {
        [Op.ne]: [''],
      },
    },
  })
    .then((cliente: any) => {
      console.log(cliente);
      res.status(200).json(cliente);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};
