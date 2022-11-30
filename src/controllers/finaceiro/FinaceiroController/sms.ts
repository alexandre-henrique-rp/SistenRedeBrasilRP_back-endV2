import { Request, Response } from "express";
import { Cobranca } from "../../../lib/cobranca/cobranca";


export const BtmCobranc = async (req: Request, res: Response) => {
  try {
    const tel = req.body.tel;
    const resposta = await Cobranca(tel);
    res.status(200).json(resposta);
  } catch (err) {
    res.status(400).send(err);
  }
}