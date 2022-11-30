import { Request, Response } from "express";
import { list2 } from "../../../lib/clienteNfe/filterList2";
import { GetClinteNfe } from "../../../lib/clienteNfe/GetClienteNfe";
import { NfeSms2 } from "../../../lib/clienteNfe/ListaNfe2";
import { NfeSms } from "../../../lib/clienteNfe/NfeSms";





export const NfeAllSend =  async (req: Request, res: Response) => {
  try {
    const lista = await GetClinteNfe();
    const envio = await NfeSms(lista);
    const lista2 = await list2(lista);
    const envio2 = await NfeSms2(lista2);
    res.json(envio);
    res.json(envio2);
  } catch (error) {
    res.status(400).send(error);
  }
}