import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';

export const GetId = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Fcweb.findOne({
    where: {
        id: {
          [Op.like]: req.params.id,
        },
      },
  })
    .then((response: any) => {
      const data = {
        id: response.id,
        name: response.name,
        cpf: response.cpf,
        razaosocial: response.razaosocial,
        Tipo_CD: response.tipocd,
        telefone: response.telefone,
        valor: response.valorcd,
        email: response.email
      }
      res.status(200).json(data);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};