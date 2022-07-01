require('dotenv').config()
const axios = require('axios');
const { writeFile } = require('fs/promises')
const { readFile } = require('fs/promises')
const fs = require('fs')


const listzap = 'errorSms.json'
const filePath = "./file/" + listzap
const negativo = 0;
const positivo = 1;

const relatorioInit = [
    {
        "id": 0
    }
];


function enviarSms(lista) {
    const quant = lista.length
    

    function updateKey() {
        writeFile(filePath, JSON.stringify(relatorioInit, null, 2), 'utf-8')
            .then(() => {
                console.log('criado com susseso')
            }).catch(error => {
                console.error('arqiovo não foi escrito')
            })
        
        // const data = readFile(filePath, 'utf-8');
        // const key = JSON.parse(data);
        // if (key.id === 0) {
        //     console.warn({ key: 0 })
        //     key.id = positivo;
        //     writeFile(filePath, JSON.stringify(key, null, 2), 'utf-8')
        //         .then(() => {
        //             console.log('key alterada com sucesso')
        //         })
        // } else {
        //     console.warn({ key: 1 })
        //     key.id = negativo;
        //     writeFile(filePath, JSON.stringify(key, null, 2), 'utf-8')
        //         .then(() => {
        //             console.log('key alterada com sucesso')
        //         })
        // }
    }
    updateKey()




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
                "number": 5516988247675,
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
                        updateKey()
                        return 'Todas as mensagens fora enviadas'
                    }
                })
                .catch(function (error) {
                    console.error(error, message = 'Este telefone ' + item.telefone + ' não possui whatsapp')
                    return 'Este telefone ' + item.telefone + ' não possui whatsapp'
                });

        }, index * 18000);
    })
}

module.exports = enviarSms