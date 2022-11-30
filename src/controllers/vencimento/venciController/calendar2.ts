import { Request, Response } from 'express';
import { Op, Sequelize } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';


export const Calendar2 = async (req: Request, res: Response) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth() - 10, 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 5, 0);
  await Fcweb.findAll({
    attributes: [
      'id',
      'vctoCD',
      'tipoCD',
      'telefone',
      'email',
      'dt_agenda',
      'hr_agenda',
      'obs_agenda',
      'validacao',
      'vctoCD',
      'andamento',
      'nome',
      [
        Sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        'titulo',
      ],
      [
        Sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)',
        ),
        'titulo_doc',
      ],
    ],
    order: [['hr_agenda', 'DESC']],
    where: {
      dt_agenda: {
        [Op.lte]: lastDay,
        [Op.gte]: firstDay,
      },
      hr_agenda: {
        [Op.ne]: '00:00:00',
      },
    },
  })
    .then((response: any) => {
      res.status(200).json(response);
    })
    .catch((Error: any) => console.error(Error));
};
