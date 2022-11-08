import "dotenv/config";
import { Router } from "express";
import sequelize from "sequelize";
import { Op } from "sequelize";
import { EmailVenc } from "../biblioteca/emailVencimento.js";
import { VencSms } from "../lib/vencimento/enviarsms.js";
import { GetVencimento } from "../lib/vencimento/getClienteVencimento.js";
import { GetErro } from "../lib/vencimento/geterro.js";
import { EnviaSms } from "../lib/vencimento/sendsms.js";
import Contador from "../model/Contador.js";

import Fcweb from "../model/fcweb.js";
import { LogErro } from "../model/logError.js";

const router6 = Router();

// session vencimento
//---------------------------------------------------------------------------------------------

router6.post("/reg/error", async (req, res) => {
  var dados = req.body;
  const logErro = await LogErro.create(dados)
    .then((logErro) => {
      console.log("Log registrado com sucesso!");
      return res.status(200).json({
        message: "Log registrado com sucesso!"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Erro: Não foi possível registar Log!"
      });
    });
  console.log(logErro);
});

router6.get("/log/error", async (req, res) => {
  const log = await LogErro.findAll({
    attributes: ["id", "ref", "log", "reg", "dia", "titulo", "email", "doc"],
    where: sequelize.fn("DATE(reg) = CURDATE")
  })
    .then(async (log) => {
      console.log(log);
      res.status(200).json(log);
    })
    .catch((err) => {
      console.log(err);
    });
});

router6.get("/send/msg", async (req, res) => {
  try {
    const lista = req.body;
    const response = await EnviaSms(lista);
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
    // const relat = await GetErro(lista);
    // const email = await EmailVenc(lista);
    console.log(lista);
    res.status(200).send(lista);
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
      "contador",
      "nome",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo"
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc"
      ]
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 30 DAY")
      )
    }
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
      "contador",
      "nome",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo"
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc"
      ]
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 15 DAY")
      )
    }
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
      "contador",
      "nome",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo"
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc"
      ]
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 10 DAY")
      )
    }
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
      "contador",
      "nome",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo"
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc"
      ]
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 5 DAY")
      )
    }
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
      "contador",
      "nome",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo"
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc"
      ]
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn(
        "DATE_ADD",
        sequelize.literal("CURRENT_DATE(), INTERVAL 1 DAY")
      )
    }
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
      "contador",
      "nome",
      [
        sequelize.literal('(SELECT IF(tipocd LIKE "%J%", razaosocial, nome))'),
        "titulo"
      ],
      [
        sequelize.literal(
          '(SELECT CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END)'
        ),
        "titulo_doc"
      ]
    ],
    where: {
      s_alerta: "ATIVADO",
      vctoCD: sequelize.fn("CURRENT_DATE")
    }
  })
    .then((cliente) => {
      const quant = cliente.length;
      console.log(quant);
      res.status(200).json(cliente);

    })
    .catch((Error) => console.error(Error));
});

router6.get("/pesqisa/getcontador", async (req, res) => {
  const contador = await Contador.findOne({
    attributes: [`unidade`, `nome`, `fone`, `email`, `whatsapp`],
    where: {
      nome: {
        [Op.like]: req.body.contador
      }
    }
  })
    .then((contador) => {
      res.status(200).send(contador);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router6;
