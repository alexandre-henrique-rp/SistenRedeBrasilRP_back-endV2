import 'dotenv/config'
import AxioGet from '../axios.js';
import axios from 'axios';


export const GetClinteNfe = async () => {

    const destino = `/get/cliente/nfe`
    const resp = await AxioGet(destino)
    if (!resp) {
        throw new Error({
            status: 404,
            data: 'Deu Ruim, não conseguima buscar os clientes NFE'
        })
    }
    return resp;
};


export const NfeSms = async (lista) => {
    const quant = lista.length
    const ErrorSms = []
    console.log(lista)

    lista.forEach(function (item, index) {
        setTimeout(async function () {

            const Dia = item.Vencimento.substr(8, 2);
            const Mes = item.Vencimento.substr(5, 2);
            const Ano = item.Vencimento.substr(0, 4);
            const tel = 55 + item.TEL1;

            var data = `{\r\n    "number" : ${tel},\r\n    "message" : "Prezado Cliente\n ${item.Cliente}\n \nEstamos entrando em contato para informar que a sua mensalidade do emisor de nota \nvence, ou já venceu na data : \n*${Dia}/${Mes}/${Ano}*, no valor de *R$ ${item.Valor},00*\n evite o transtornos com o bloqueio da sua conta\nEfetua agora o seu pagamento pelo link abaixo\n\n\n${item.LINK}\n\n\nNão deixe para a última hora\n\nDuvidas? \nentre em comtato pelo WhatsApp (16) 3325-4134.\n\n\nAtenciosamente Equipe Rede Brasil Rp",\r\n    "forceSend" : true,\r\n    "verifyContact" : true\r\n}`;

            var config = {
                method: 'post',
                url: 'https://api.zapstar.com.br/core/v2/api/chats/send-text',
                headers: {
                    '60de0c8bb0012f1e6ac5546b': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            if (index + 1 === quant) {
                console.log('Todoas as mensagens de Tel 1 foram enviadas')
            }
        }, index * 10000);
    })
};

export const list2 = async (info) => {

    const data = info.filter(item => item.TEL2)
    console.log(data)
    if (!data) {
        throw new Error('Deu ruim')
    }
    return data;
};

export const NfeSms2 = async (lista) => {
    
    const quant = lista.length
    const ErrorSms = []
    console.log(lista)

    lista.forEach(function (item, index) {
        setTimeout(async function () {

            const Dia = item.Vencimento.substr(8, 2);
            const Mes = item.Vencimento.substr(5, 2);
            const Ano = item.Vencimento.substr(0, 4);
            const tel = 55 + item.TEL2;

            var data = `{\r\n    "number" : ${tel},\r\n    "message" : "Prezado Cliente\n ${item.Cliente}\n \nEstamos entrando em contato para informar que a sua mensalidade do emisor de nota \nvence, ou já venceu na data : \n*${Dia}/${Mes}/${Ano}*, no valor de *R$ ${item.Valor},00*\n evite o transtornos com o bloqueio da sua conta\nEfetua agora o seu pagamento pelo link abaixo\n\n\n${item.LINK}\n\n\nNão deixe para a última hora\n\nDuvidas? \nentre em comtato pelo WhatsApp (16) 3325-4134.\n\n\nAtenciosamente Equipe Rede Brasil Rp",\r\n    "forceSend" : true,\r\n    "verifyContact" : true\r\n}`;

            var config = {
                method: 'post',
                url: 'https://api.zapstar.com.br/core/v2/api/chats/send-text',
                headers: {
                    '60de0c8bb0012f1e6ac5546b': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            if (index+1 === quant) {
                console.log('Todoas as mensagens de Tel 2 foram enviadas')
            }
        }, index * 10000);
    })

};
