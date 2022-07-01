require('dotenv').config()
const { Router } = require('express')
const fs = require('fs')

const router = Router()

const cliente = require('../model/fcweb')
const enviarSms = require('../lib/enviarSms')

// const FileWrite = require('../lib/write_tel')


router.get('/', async (req, res) => {
    const lista = req.body
    const response = await enviarSms(lista)
    res.json(response)
})

router.post('/send/email', function (req, res) {


    let email = req.body.email;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secureConnection: false,
        requireTLS: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    })
    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        // to: "alexandreredebrasil@gmail.com",
        subject: '"Urgente" O seu certificado corre o risco de nao funcionar mais',
        // text: "Prezado Cliente \n \nEstamos entrando em contato para informar que o seu Certificado digital \nModelo: <strong>" + req.body.tipoCD + ". - " + req.body.titulo + ",</strong>\n<strong>" + req.body.titulo_doc + "</strong> \nExpira " + req.body.dia + "          " + req.body.vctoCD.substr(8, 2) + "/" + req.body.vctoCD.substr(5, 2) + "/" + req.body.vctoCD.substr(0, 4) + "            \nfc:" + req.body.id + "       \n \nNão deixe para a última hora, ligue agora          \npara (16) 3325-4134 e renove o seu certificado.          \nAtenciosamente Equipe Rede Brasil Rp",
        html: '<b>Prezado Cliente</b><br><br><br><p>Estamos entrando em contato para informar que o seu Certificado digital<br>Modelo: <strong>' + req.body.tipoCD + '</strong>. - <strong>' + req.body.titulo + '</strong>,<br><strong>' + req.body.titulo_doc + '</strong>,  Expira:  <strong>' + req.body.dia + '</strong>     ' + req.body.vctoCD.substr(8, 2) + '/' + req.body.vctoCD.substr(5, 2) + '/' + req.body.vctoCD.substr(0, 4) + '<br>fc:' + req.body.id + '<br><br><br><br>Não deixe para a última hora, Entre em contato agora pelo WhatsApp <br>para <a href="https://api.whatsapp.com/send?phone=551633254134&text=Ola%20quero%20renovar%20meu%20Certificado">(16) 3325-4134</a> e renove o seu certificado.<br><br><br><br><br>Atenciosamente Equipe Rede Brasil Rp</p>'
    })
        .then(info => {
            res.status(200).send(info)
        }).catch(error => {
            res.status(500).send(error)
            console.error('Email incorreto')
        })
});

module.exports = router