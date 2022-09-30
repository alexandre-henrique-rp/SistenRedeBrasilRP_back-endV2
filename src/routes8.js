import "dotenv/config";
import { Router } from "express";

import Sorteio from "../model/sorteio.js";
const router8 = Router();

// serviços extras
//-----------------------------------------------------------------

router8.post("/sorteio", async (req, res) => {
  const dados = req.body;
  if (
    dados.nome === "" &&
    dados.email === "" &&
    dados.telefone === "" &&
    dados.cep === "" &&
    dados.certificado === ""
  ) {
    return res.status(400).json("falta dados");
  }

  const usuario = await Sorteio.create(dados)

    .then((usuario) => {
      console.log(usuario);
      res.status(200).json({ mesage: "cadastro comcluido" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

export default router8;
