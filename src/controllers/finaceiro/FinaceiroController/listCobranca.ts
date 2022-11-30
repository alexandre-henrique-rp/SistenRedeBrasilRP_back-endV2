import { Request, Response } from "express";
import { AxioGet } from "../../../lib/axios_api";
import { RespostaCobre } from "../../../lib/cobranca/respcobre";


export const ListCobranc = async (req: Request, res: Response) => {
  try {
    const url = '/combranca';
    const get = await AxioGet(url);
    const resposta = await RespostaCobre(get.data);
    console.log(resposta);
    return res.status(200).json(resposta);
  } catch (err) {
    return res.status(400).json({
      message: 'Erro: Não foi possível comunicar com servidor!',
      erro: err,
    });
  }
}