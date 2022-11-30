import { Request, Response } from "express";
import { LogErro } from "../../../database/models/logError";


export const CreatErro = async (req: Request, res: Response) => {
  var dados = req.body;
  await LogErro.create(dados)
    .then(() => {
      console.log('Log registrado com sucesso!');
      return res.status(200).json({
        msg: 'Log registrado com sucesso!',
      });
    })
    .catch(() => {
      return res.status(400).json({
        error: true,
        msg: 'Erro: Não foi possível registar Log!',
      });
    });
}