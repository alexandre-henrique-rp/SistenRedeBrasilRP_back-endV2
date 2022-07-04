require('dotenv').config()
const { Router } = require('express')


const router = Router()

const cliente = require('../model/fcweb')
const enviarSms = require('../lib/enviarSms')
const enviarEmail = require('../lib/enviarEmail')

// const FileWrite = require('../lib/write_tel')


router.get('/', async (req, res) => {
    const lista = req.body
    // const response = await enviarSms(lista)
    const response2 = await enviarEmail(lista)
    
    // res.json(response)
    res.json(response2)
})

router.post('/send/email', function (req, res) {

});

module.exports = router