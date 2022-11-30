import {Op} from "sequelize";
import { Agrv } from "../../../database/models/agrv";
import { Request, Response } from 'express';


export const AgrvId = async (req: Request, res: Response) => {
  await Agrv.findOne({
    attributes: [
      "idagrv",
      "nome",
      "numeropolo",
      "permissaoacesso",
      "painel_agrv"
    ],
    where: {
      permissaoacesso: {
        [Op.or]: ["TOTEN", "PERMITIDO", "NEGADO"]
      },
      idagrv: req.params.id
    }
  })
    .then((agrv: any) => {
      res.status(200).json(agrv);
      console.log(agrv);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(400).json(err);
    });
};
