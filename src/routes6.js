import "dotenv/config";
import { Router } from "express";
import sequelize from "sequelize";
import { Op } from "sequelize";
import {VerificaSms} from "../biblioteca/whatsapp.js";
import { GetVencimento } from "../lib/vencimento/getClienteVencimento.js";
import Fcweb from "../model/fcweb.js";

const router6 = Router();

// session mensagens
//---------------------------------------------------------------------------------------------

router6.post("/reg/error", async (req, res) => {
  var dados = req.body;
  const LogErro = await LogErro.create({ dados })
    .then((LogErro) => {
      console.log(LogErro);

      return res.status(200).json({
        message: "Log registrado com sucesso!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Erro: Não foi possível registar Log!",
      });
    });
});

router6.get("/send/msg", async (req, res) => {
  try {
    const lista = req.body;
    const response = await enviarSms(lista);
    const response2 = await enviarEmail(lista);
    res.json(response);
    res.json(response2);
  } catch (error) {
    res.status(400).send(error);
  }
});

router6.get("/send/vencimento", async (req, res) => {
  try {
    const lista = await GetVencimento();
    const relat = await VerificaSms(lista); 
    console.log(relat);

    res.json(relat);
  } catch (error) {
    res.status(400).send(error);
  }
});

router6.get("/cliente-30", async (req, res) => {
  const cliente = await Fcweb.findAll({
    attributes: [
      "id",
      "vctoCD",
      "s_alerta",
      "tipoCD",
      "telefone",
      "email",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo",
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc",
      ],
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 30 DAY")
      ),
    },
  })

    .then((cliente) => {
      const quant = cliente.length;
      console.log(quant);
      res.status(200).json(cliente);
    })
    .catch((Error) => console.error(Error));
});

router6.get("/cliente-15", async (req, res) => {
  const cliente = await Fcweb.findAll({
    attributes: [
      "id",
      "vctoCD",
      "s_alerta",
      "tipoCD",
      "telefone",
      "email",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo",
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc",
      ],
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 15 DAY")
      ),
    },
  })

    .then((cliente) => {
      const quant = cliente.length;
      console.log(quant);
      res.status(200).json(cliente);
    })
    .catch((Error) => console.error(Error));
});

router6.get("/cliente-10", async (req, res) => {
  const cliente = await Fcweb.findAll({
    attributes: [
      "id",
      "vctoCD",
      "s_alerta",
      "tipoCD",
      "telefone",
      "email",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo",
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc",
      ],
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 10 DAY")
      ),
    },
  })

    .then((cliente) => {
      const quant = cliente.length;
      console.log(quant);
      res.status(200).json(cliente);
    })
    .catch((Error) => console.error(Error));
});

router6.get("/cliente-5", async (req, res) => {
  const cliente = await Fcweb.findAll({
    attributes: [
      "id",
      "vctoCD",
      "s_alerta",
      "tipoCD",
      "telefone",
      "email",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo",
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc",
      ],
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 5 DAY")
      ),
    },
  })

    .then((cliente) => {
      const quant = cliente.length;
      console.log(quant);
      res.status(200).json(cliente);
    })
    .catch((Error) => console.error(Error));
});

router6.get("/cliente-1", async (req, res) => {
  const cliente = await Fcweb.findAll({
    attributes: [
      "id",
      "vctoCD",
      "s_alerta",
      "tipoCD",
      "telefone",
      "email",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo",
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc",
      ],
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 1 DAY")
      ),
    },
  })

    .then((cliente) => {
      const quant = cliente.length;
      console.log(quant);
      res.status(200).json(cliente);
    })
    .catch((Error) => console.error(Error));
});

router6.get("/cliente-now", async (req, res) => {
  const cliente = await Fcweb.findAll({
    attributes: [
      "id",
      "vctoCD",
      "s_alerta",
      "tipoCD",
      "telefone",
      "email",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo",
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc",
      ],
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn("CURRENT_DATE"),
    },
  })

    .then((cliente) => {
      const quant = cliente.length;
      console.log(quant);
      res.status(200).json(cliente);
    })
    .catch((Error) => console.error(Error));
});

export default router6;
