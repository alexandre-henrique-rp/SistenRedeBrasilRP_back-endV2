import { Request, Response } from "express";
import { Fcweb } from "../../../database/models/fcweb";


export const CobrancId = async (req: Request, res: Response) => {
  const data = req.body;
  data.smspg = req.body.smspg;
  await Fcweb.update(data, {
    where: {
      id: req.params.id,
    },
  })
    .then((response: any) => {
      res.json(response);
    })
    .catch((err: any) => {
      return res.status(400).json({
        message: 'Erro: Não foi possível comunicar com servidor!',
        erro: err,
      });
    });
}