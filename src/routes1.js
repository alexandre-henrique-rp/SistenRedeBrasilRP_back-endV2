require('dotenv').config()
const { Router } = require('express')
const { eAdmin } = require('../middlewares/auth');


const router1 = Router()

const enviarSms = require('../lib/enviarSms')
const enviarEmail = require('../lib/enviarEmail')
const Agrv = require('../model/agrv')



router1.get('/listar/agrv', async (req, res) => {
    const agrv = await Agrv.findAll({
        attributes: ['idagrv', 'nome', 'numeropolo'],
        where: {
            painel_agrv: 1,
            permissaoacesso: 'PERMITIDO'
        }
    })
        .then((agrv) => {
            res.json(agrv)
            console.log(agrv)
        })
        .catch((err) => {
            console.log(err)
        })
});

router1.get('/listar/relatorio/agrv/:id', async (req, res) => {
    const agrv = await Agrv.findAll({
        attributes: ['idagrv', 'nome'],
       

    })
        .then((agrv) => {
            res.json(agrv)
            console.log(agrv)
        })
        .catch((err) => {
            console.log(err)
        })
});

router1.get('/send/msg', async (req, res) => {

    const lista = req.body

    const response = await enviarSms(lista)
    const response2 = await enviarEmail(lista)

    res.json(response)
    res.json(response2)
});

router1.get('/send', eAdmin, function (req, res) {
    res.json('ola')
});

router1.get('/itsallok', eAdmin, async (req, res) => {
    res.json("it's all OK")
});


module.exports = router1