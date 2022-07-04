require('dotenv').config()
const axios = require('axios');
const { writeFile } = require('fs/promises')


const listzap = 'errorSms.json'
const filePath = "./file/" + listzap


function enviarSms(lista) {
    const quant = lista.length
    const ErrorSms = []

    lista.forEach(function (item, index) {
        setTimeout(async function () {
            var smsScript = "Prezado Cliente \n \nEstamos entrando em contato para informar que o seu Certificado digital \nModelo: *" + item.tipoCD + ". - " + item.titulo + ",*\n*" + item.titulo_doc + "* \nExpira " + item.dia + "          " + item.vctoDia + "/" + item.vctoMes + "/" + item.vctoAno + "            \nfc:" + item.id + "       \n \nNão deixe para a última hora, Entre em contato agora          \npelo WhatsApp (16) 3325-4134 e renove o seu certificado.          \nAtenciosamente Equipe Rede Brasil Rp"

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
                .then(function (response) {
                    console.log(response.data.status, message = 'Mensagem enviada com sucesso')
                    return 'Mensagem enviada com sucesso'
                })
                .then(() => {
                    if (quant === index + 1) {
                        console.log(message = 'Todas as mensagens fora enviadas')

                        writeFile(filePath, JSON.stringify(ErrorSms, null, 2), 'utf-8')
                            .then(() => {
                                console.log('criado com susseso')
                            }).catch(error => {
                                console.error('arqiovo não foi escrito')
                            })
                        
                        return 'Todas as mensagens fora enviadas'
                    } 
                })
                .catch(function (error) {
                    console.error(error.data, message = 'Este telefone ' + item.telefone + ' não possui whatsapp')
                    const id = item.id;
                    const vctoCD = item.vctoCD
                    const tipoCD = item.tipoCD
                    const telefone = item.telefone
                    const titulo = item.titulo
                    const titulo_doc = item.titulo_doc
                    ErrorSms.push({ id, vctoCD, tipoCD, telefone, titulo, titulo_doc })

                    if (quant === index + 1) {
                        console.log(message = 'Todas as mensagens fora enviadas')

                        writeFile(filePath, JSON.stringify(ErrorSms, null, 2), 'utf-8')
                            .then(() => {
                                console.log('criado com susseso')
                            }).catch(error => {
                                console.error('arqiovo não foi escrito')
                            })

                        return 'Todas as mensagens fora enviadas'
                    } 
                    return 'Este telefone ' + item.telefone + ' não possui whatsapp'
                });

        }, index * 18000);
    })
}

module.exports = enviarSms