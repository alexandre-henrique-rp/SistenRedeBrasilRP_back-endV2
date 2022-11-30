import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

import { LogErro } from '../../../database/models/logError';

export const GetErroVenc  = async (req: Request, res: Response) => {
  const log = await LogErro.findAll({
    attributes: ['id', 'ref', 'log', 'reg', 'dia', 'titulo', 'email', 'doc'],
    where: Sequelize.fn('DATE(reg) = CURDATE'),
  })
    .then(async (response: any) => {
      res.status(200).json(response);
    })
    .catch((err: any) => {
      console.log(err);
    });
};
