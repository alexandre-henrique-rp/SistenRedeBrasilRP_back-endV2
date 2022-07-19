require('dotenv').config()
const axios = require('axios');



var dataI = new Date();
var dia = dataI.getDate();
var mes = dataI.getMonth() + 1;
var ano = dataI.getFullYear();
var mesA = mes < "10" ? "0" + mes : mes;
var diaA = dia < "10" ? "0" + dia : dia
var dataAtual = diaA + "-" + mesA + "-" + ano;

const inicio = { "id": 000, "name": "Relatorio de erro(" + dataAtual + ")" };


const enviarSms = async (lista) => {
    const quant = lista.length
    const ErrorSms = []

    lista.forEach(function (item, index) {
        setTimeout(async function () {
            var smsScript = 'ola';

            const requestOptionsDefault = {
                headers: {
                    "access-token": process.env.ZAP_TOKEN,
                    "Content-Type": process.env.ZAP_TYPE
                },
                redirect: 'follow'
            };
            axios.post(process.env.ZAP_URL_API, JSON.stringify({
                "number": 55 + item.telefone,
                "message": smsScript,
                "forceSend": true,
                "verifyContact": false
            }), requestOptionsDefault)
                .then(response => {
                    res.status(200).send(response)
                    console.log(response.data.status, message = 'Mensagem enviada com sucesso')
                    return 'Mensagem enviada com sucesso'
                })
                .then(() => {
                    if (quant === index + 1) {
                        console.log(message = 'Todas as mensagens fora enviadas')
                        console.status(200).send('Todas as mensagens fora enviadas')
                        const resp = { status: 200, message: 'Todas as mensagens fora enviadas' };
                        return JSON.stringify(resp, null, 2)
                    }
                })
                .catch(error => {
                    console.error(error.message, message = 'Este telefone ' + item.telefone + ' não possui whatsapp')
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
                        if (ErrorSms !== '' || undefined) {
                            console.log({ status: 500, message: 'Os Telefones estam incorretos foran salvos para relatorio', data: ErrorSms })
                            const resp = { status: 500, message: 'Os Telefones estam incorretos foran salvos para relatorio', data: ErrorSms };
                            return JSON.stringify(resp, null, 2)
                        }
                    }

                    console.error('Este telefone ' + item.telefone + ' não possui whatsapp')
                    const resp = { status: 500, message: 'Este telefone ' + item.telefone + ' não possui whatsapp', error };
                    return JSON.stringify(resp, null, 2)
                });

        }, index * 18000);
    })
}

module.exports = enviarSms