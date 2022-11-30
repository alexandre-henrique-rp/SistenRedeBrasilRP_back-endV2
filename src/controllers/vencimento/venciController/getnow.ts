import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';

export const GetNow = async (req: Request, res: Response) => {
  await Fcweb.findAll({
    attributes: [
      'id',
      'vctoCD',
      's_alerta',
      'tipoCD',
      'telefone',
      'email',
      'contador',
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
    where: {
      s_alerta: 'ATIVADO',
      vctoCD: Sequelize.fn('CURRENT_DATE'),
    },
  })
    .then((response: any) => {
      res.status(200).json(response);
    })
    .catch((Error: any) => console.error(Error));
};
