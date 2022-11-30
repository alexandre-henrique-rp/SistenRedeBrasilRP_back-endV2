import { Request, Response } from "express";
import { EnviaSms } from "../../../lib/vencimento/sendsms";


export const SendSms = async (req: Request, res: Response) => {
  try {
    const lista = req.body;
    const response = await EnviaSms(lista);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error);
  }
}
