import "dotenv/config";
import { Router } from "express";
import { Op } from "sequelize";
import {AxioGet} from "../lib/axios_api.js";
import { GetLista } from "../lib/cobranca/calculos/totalCertMes.js";
import { ValorCobr } from "../lib/cobranca/calculos/valorcobr.js";
import { Cobranca } from "../lib/cobranca/cobranca.js";
import { DashBord } from "../lib/cobranca/dashbord.js";
import { DashBord2 } from "../lib/cobranca/dashbord2.js";
import {RespostaCobre} from "../lib/cobranca/respcobre.js";
import { eAdmin } from "../middlewares/auth.js";

import Fcweb from "../model/fcweb.js";
const router7 = Router();

//financeiro

// ---------------------------------------------------------------------------
// ceinte geral que falta pagar nos ultimos 12meses

router7.get("/combranca", async (req, res) => {
  const agrv = await Fcweb.findAll({
    attributes: [
      "id",
      "nome",
      "razaosocial",
      "cnpj",
      "cpf",
      "unidade",
      "estatos_pgto",
      "andamento",
      "telefone",
      "tipocd",
      "validacao",
      "valorcd",
      "custocd",
      "dt_aprovacao",
      "formapgto",
      "id_fcw_soluti",
      "contador",
      "smspg"
    ],
    where: {
      unidade: 1,
      estatos_pgto: {
        [Op.or]: ["", "Verificar", "Falta pgto"]
      },
      andamento: {
        [Op.or]: ["EMITIDO", "APROVADO"]
      },
      dt_aprovacao: {
        [Op.lte]: new Date(),
        [Op.gte]: new Date(new Date() - 5 * 30 * 60 * 60 * 60 * 1000)
      }
    }
  })
    .then(async (agrv) => {
      const valor = await ValorCobr(agrv);
      return res.status(200).json({
        data: agrv,
        quant: agrv.length,
        valor: valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Erro: Não foi possível comunicar com servidor!",
        erro: err
      });
    });
});

// envia mensagem botão emvia mesagem falta de pagamento
router7.get("/combranca/sms", async (req, res) => {
  try {
    const tel = req.body.tel;
    const resposta = await Cobranca(tel);
    res.status(200).json(resposta);
  } catch (err) {
    res.status(400).send(err);
  }
});

router7.get("/combranca/relat/emissao", async (req, res) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const finaceiro = await Fcweb.findAll({
    attributes: [
      "id",
      "nome",
      "razaosocial",
      "cnpj",
      "cpf",
      "unidade",
      "estatos_pgto",
      "andamento",
      "telefone",
      "tipocd",
      "validacao",
      "valorcd",
      "custocd",
      "dt_aprovacao",
      "formapgto",
      "id_fcw_soluti"
    ],
    where: {
      andamento: {
        [Op.or]: ["EMITIDO", "APROVADO"]
      },
      dt_aprovacao: {
        [Op.gte]: firstDay,
        [Op.lte]: lastDay
      }
    }
  })
    .then((finaceiro) => {
      res.json(finaceiro);
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Erro: Não foi possível comunicar com servidor!",
        erro: err
      });
    });
});

router7.get("/combranca/relat/dashbord", eAdmin, async (req, res) => {
  try {
    const getresp = await GetLista();
    const getDashboard = await DashBord(getresp);
    const getDashboard2 = await DashBord2(getresp);
    const resposta = { ...getDashboard, ...getDashboard2 };
    return res.status(200).json(resposta);
  } catch (err) {
    return res.status(400).json({
      message: "Erro: Não foi possível comunicar com servidor!",
      erro: err
    });
  }
});
router7.get("/combranca/lista", async (req, res) => {
  try {
     const url = "combranca";
    const get = await AxioGet(url);
    console.log(get)
    const resposta = await RespostaCobre(get.data);
    return res.status(200).json(resposta);
  } catch (err) {
    return res.status(400).json({
      message: "Erro: Não foi possível comunicar com servidor!",
      erro: err
    });
  }
});

export default router7;
