require('dotenv').config()
const { Router, response } = require('express')


const router = Router()

const cliente = require('../model/fcweb')
const enviarSms = require('../lib/enviarSms')
const enviarEmail = require('../lib/enviarEmail')
const writeEmail = require('../lib/writeEmail')

// const FileWrite = require('../lib/write_tel')


router.get('/send/msg', async (req, res) => {

    const lista = req.body
    
    // const response = await enviarSms(lista)
    const response2 = await enviarEmail(lista)

    // res.json(response)
    res.json(response2)
})

router.get('/send', function (req, res) {
    res.json('ola')
});

module.exports = router