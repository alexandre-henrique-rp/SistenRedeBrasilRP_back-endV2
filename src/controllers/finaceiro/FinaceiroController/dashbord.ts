import { Request, Response } from "express";
import { GetLista } from "../../../lib/cobranca/calculos/totalCertMes";
import { DashBord } from "../../../lib/cobranca/dashbord";
import { DashBord2 } from "../../../lib/cobranca/dashbord2";


export const DashbordFinac = async (req: Request, res: Response) => {
  try {
    const getresp = await GetLista();
    const getDashboard = await DashBord(getresp);
    const getDashboard2 = await DashBord2(getresp);
    const resposta = { ...getDashboard, ...getDashboard2 };
    return res.status(200).json(resposta);
  } catch (err) {
    return res.status(400).json({
      message: 'Erro: Não foi possível comunicar com servidor!',
      erro: err,
    });
  }
}