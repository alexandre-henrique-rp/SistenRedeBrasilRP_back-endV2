import { Request, Response } from "express";
import { CentralSms } from "../../../lib/vencimento/centralsms";
import { GetVencimento } from "../../../lib/vencimento/getClienteVencimento";


export const SendVencimento = async (req: Request, res: Response) => {
  try {
    const lista = await GetVencimento();
    const resp = await CentralSms(lista);
    res.status(200).send(resp);
  } catch (error) {
    res.status(400).send(error);
  }
}

 