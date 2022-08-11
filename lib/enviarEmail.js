import 'dotenv/config'
import nodemailer from 'nodemailer';
import { writeFile } from 'fs/promises';

const listzap = 'errorEmail.json'
const filePath = "./file/" + listzap

var dataI = new Date();
var dia = dataI.getDate();
var mes = dataI.getMonth() + 1;
var ano = dataI.getFullYear();
var mesA = mes < "10" ? "0" + mes : mes;
var diaA = dia < "10" ? "0" + dia : dia
var dataAtual = diaA + "-" + mesA + "-" + ano;

const inicio = { "id": '000', "name": "Relatorio de erro(" + dataAtual + ")" };


const enviarEmail = async(lista) => {

    const quant = lista.length
    const ErrorSms = []



    lista.forEach(function (item, index) {
        setTimeout(async function () {

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
                // to: item.email,
                to: "alexandreredebrasil@gmail.com",
                subject: '"Urgente" O seu certificado corre o risco de nao funcionar mais',

                html: '<b>Prezado Cliente</b><br><br><br><p>Estamos entrando em contato para informar que o seu Certificado digital<br>Modelo: <strong>' + item.tipoCD + '</strong>. - <strong>' + item.titulo + '</strong>,<br><strong>' + item.titulo_doc + '</strong>,  Expira:  <strong>' + item.dia + '</strong>     ' + item.vctoCD.substr(8, 2) + '/' + item.vctoCD.substr(5, 2) + '/' + item.vctoCD.substr(0, 4) + '<br>fc:' + item.id + '<br><br><br><br>Não deixe para a última hora, Entre em contato agora pelo WhatsApp <br>para <a href="https://api.whatsapp.com/send?phone=551633254134&text=Ola%20quero%20renovar%20meu%20Certificado">(16) 3325-4134</a> e renove o seu certificado.<br><br><br><br><br>Atenciosamente Equipe Rede Brasil Rp</p><br><br><br><br><br><p>' + item.email + '</p>'
            })
                .then(info => {
                    // console.status(200).send(info)
                    console.log({ status: 200, message: 'Mensagens enviada com susseso', info })
                    const resp = { status: 200, message: 'Mensagens enviada com susseso', info };
                    return JSON.stringify(resp, null, 2)
                })
                .then(() => {

                    if (quant === index + 1) {
                        console.log(message = 'Todas as mensagens fora enviadas')
                        console.status(200).send('Todas as mensagens fora enviadas')
                        const resp = { status: 200, message: 'Todas as mensagens fora enviadas' };
                        return JSON.stringify(resp, null, 2)
                    }
                }).catch(error => {
                    const id = item.id;
                    const vctoCD = item.vctoCD
                    const tipoCD = item.tipoCD
                    const telefone = item.telefone
                    const titulo = item.titulo
                    const email = item.email
                    const titulo_doc = item.titulo_doc
                    ErrorSms.push(inicio, { id, vctoCD, tipoCD, telefone, titulo, titulo_doc, email })

                    if (quant === index + 1) {
                        console.log(message = 'Todas as mensagens fora enviadas')
                        if (ErrorSms !== '' || undefined)
                            writeFile(filePath, JSON.stringify(ErrorSms, null, 2), 'utf-8')
                                .then(() => {
                                    console.log('criado com susseso')
                                }).catch(error => {
                                    console.error('arqiovo não foi escrito')
                                })
                        console.log({ status: 500, message: 'Os Emails incorretos foran salvos par relatorio', error })
                        const resp = { status: 500, message: 'Os Emails incorretos foran salvos par relatorio', error };
                        return JSON.stringify(resp, null, 2)
                    }

                    console.error('Email incorreto')
                    const resp = { status: 500, message: 'Email incorreto', error };
                    return JSON.stringify(resp, null, 2)
                })

        }, index * 1800);
    })
}

export default enviarEmail

