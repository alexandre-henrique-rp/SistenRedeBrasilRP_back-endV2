import 'dotenv/config'
import { Router } from 'express';
import { Op } from "sequelize";
import { eAdmin } from '../middlewares/auth.js';



import Fcweb from '../model/fcweb.js';
import Contador from '../model/Contador.js';
import { PesqisaATV, PesqisaCont } from '../lib/contadores/contpesq.js'
import { ResultRelat } from '../lib/contadores/resultcont.js';



const router5 = Router()


// session clinte

// ---------------------------------------------------------------------------

router5.get('/relatorio/contador', async (req, res) => {
    try {
        const pesqicont = await PesqisaCont()
        const pequires = await PesqisaATV(pesqicont)
        const result = await ResultRelat(pequires)

        res.json(result);
    } catch (error) {
        res.status(400).send('Deu Ruim o relatorio dos contadores')
    }
});

router5.get('/pesqisa/contador', async (req, res) => {

    const contador = await Contador.findAll({
        attributes: ['codigo', 'nome'],
    })
        .then((contador) => {
            res.json(contador)
        })
        .catch((err) => {
            console.log(err)
        })
});

router5.get('/pesqisa/cliente/:contador', async (req, res) => {

    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const cliente = await Fcweb.findAll({
      attributes: ["id", "contador", "tipocd", "dt_aprovacao"],
      order: [["dt_aprovacao", "DESC"]],
      where: {
        contador: {
          [Op.like]: req.params.contador
        },
        dt_aprovacao: {
          [Op.lte]: lastDay,
          [Op.gte]: firstDay
        }
      }
    })
      .then((cliente) => {
        res.json(cliente);
      })
      .catch((err) => {
        console.log(err);
      });
});

export default router5;