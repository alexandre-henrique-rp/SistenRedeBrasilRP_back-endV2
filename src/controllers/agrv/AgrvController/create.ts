import { Request, Response } from 'express';
import bcrypt from "bcryptjs";
import { Agrv } from '../../../database/models/agrv';
import { SetPolo } from '../../../lib/agrv/setPolo';
import { CalcPolo } from '../../../lib/agrv/calcPolo';

export const CreateAgrv = async (req: Request, res: Response) => {
  const response = await SetPolo();
  const polo = await CalcPolo(response);

  var dados = req.body;
  dados.permissaoacesso = "PERMITIDO";
  dados.nomepolo = req.body.municipio;
  dados.ufpolo = req.body.uf;
  dados.painel_agrv = 1;
  dados.numeropolo = polo + 1;
  dados.email2 = req.body.senha;
  dados.senha = await bcrypt.hash(dados.senha, 8);

  await Agrv.create(dados)
    .then((response: { data: any; }) => {
      return res.status(200).json({
        msg: "Parceiro de revenda cadastrado com sucesso!",
        data: response.data,
        userCreat1: dados
      });
    })
    .catch((err: any) => {
      return res.status(400).json({
        msg: "Erro: Não foi possível cadastrar o Parceiro!",
        error: err
      });
    });
};
