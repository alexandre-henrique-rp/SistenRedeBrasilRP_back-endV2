import 'dotenv/config'
import { Request, Response } from "express";
import { Agr } from "../../../database/models/agr";
import bcrypt from 'bcrypt'


export const createAgr = async (req: Request, res: Response) => {

  var dados = req.body;

  dados.polo = "MATRIZ";
  dados.c_unidade = 1;
  dados.usuario = req.body.usuarrio;
  dados.nome = req.body.nome;
  dados.email = req.body.email;
  dados.A1PF = req.body.a1pf;
  dados.A3PF = req.body.a3pf;
  dados.A1PJ = req.body.a1pj;
  dados.A3PJ = req.body.a3pj;
  dados.bloco_de_notas = "hidden";
  dados.bt_producao = "hidden";
  dados.ver_t_custo = "hidden";
  dados.bloc_vl_comicao = "hidden";
  dados.bloquearINT = 0;
  dados.bt_ag_indica = "button";
  dados.bt_sol_boleto = "hidden";
  dados.bloc_bt_nfe_fcw = "button";
  dados.bt_financeiro = "hidden";
  dados.bloc_nuvem = "hidden";
  dados.verComissaoParceiro = "visible";
  dados.senha = req.body.senha;
  dados.senha_has = await bcrypt.hash(dados.senha, 8);

  await Agr.create(dados)
    .then(() => {
      return res.status(201).json({
        msg: "Usuário cadastrado com sucesso!"
      });
    })
    .catch(() => {
      return res.status(400).json({
        msg: "Erro: Não foi possível cadastrar o usuário!"
      });
    });
};
