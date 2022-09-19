import "dotenv/config";
import { Router } from "express";
import { Op } from "sequelize";
import { Cobranca } from "../lib/cobranca/cobranca.js";
import { GetLista } from "../lib/cobranca/dasbordCal.js";
import { DashBord } from "../lib/cobranca/dashbord.js";
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
      "valorcd",
      "dt_aprovacao",
      "formapgto"
    ],
    where: {
      estatos_pgto: {
        [Op.or]: ["", "Verificar", "Falta pgto"]
      },
      andamento: {
        [Op.or]: ["EMITIDO", "APROVADO", "ENVIADO CV"]
      },
      dt_aprovacao: {
        [Op.lte]: new Date(),
        [Op.gte]: new Date(new Date() - 5 * 30 * 60 * 60 * 60 * 1000)
      }
    }
  })
    .then((agrv) => {
      return res.status(200).json(agrv);
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
      "formapgto"
    ],
    where: {
      andamento: {
        [Op.or]: ["EMITIDO", "APROVADO", "ENVIADO CV"]
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

router7.get("/combranca/relat/dashbord", async (req, res) => {
  try {
    const getDashboard = await DashBord();
    return res.status(200).json(getDashboard);
  } catch (err) {
    return res.status(400).json({
      message: "Erro: Não foi possível comunicar com servidor!",
      erro: err
    });
  }
});

export default router7;
