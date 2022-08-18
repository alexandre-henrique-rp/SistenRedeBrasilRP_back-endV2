import 'dotenv/config'
import axios from 'axios';
import { writeFile } from 'fs/promises';

const listzap = 'errorSms.json'
const filePath = "./file/" + listzap


var dataI = new Date();
var dia = dataI.getDate();
var mes = dataI.getMonth() + 1;
var ano = dataI.getFullYear();
var mesA = mes < "10" ? "0" + mes : mes;
var diaA = dia < "10" ? "0" + dia : dia
var dataAtual = diaA + "-" + mesA + "-" + ano;

const inicio = { "id": '0001', "name": "Relatorio de erro(" + dataAtual + ")" };


const enviarSms = async ( lista ) => {
    const quant = lista.length
    const ErrorSms = []

    lista.forEach( function ( item, index ) {
        setTimeout( async function () {

            const Dia = Vencimento.substr( 8, 2 );
            const Mes = Vencimento.substr( 5, 2 );
            const Ano = Vencimento.substr( 0, 4 );

            var smsScript = "Prezado Cliente " + item.Cliente + "\n \nEstamos entrando em contato para informar que a sua mensalidade do emisor de nota \nvence na data : *" + item.Dia + "/" + item.Mes + "/" + item.Ano + "*\n evite o transtornos com o bloqueio da sua conta\nEfetua agora o seu pagamento pelo link abaixo            \nfc:" + item.id + "       \n \nNão deixe para a última hora, Entre em contato agora          \npelo WhatsApp (16) 3325-4134 e renove o seu certificado.          \nAtenciosamente Equipe Rede Brasil Rp"

            const requestOptionsDefault = {
                headers: {
                    "access-token": process.env.ZAP_TOKEN,
                    "Content-Type": process.env.ZAP_TYPE
                },
                redirect: 'follow'
            };
            axios.post( process.env.ZAP_URL_API, JSON.stringify( {
                "number": 55 + item.telefone,
                "message": smsScript,
                "forceSend": true,
                "verifyContact": false
            } ), requestOptionsDefault )
                .then( response => {
                    res.status( 200 ).send( response )
                    console.log( response.data.status, message = 'Mensagem enviada com sucesso' )
                    return 'Mensagem enviada com sucesso'
                } )
                .then( () => {
                    if ( quant === index + 1 )
                    {
                        console.log( message = 'Todas as mensagens fora enviadas' )
                        console.status( 200 ).send( 'Todas as mensagens fora enviadas' )
                        const resp = { status: 200, message: 'Todas as mensagens fora enviadas' };
                        return JSON.stringify( resp, null, 2 )
                    }
                } )
                .catch( error => {
                    console.error( error.message, message = 'Este telefone ' + item.telefone + ' não possui whatsapp' )
                    const id = item.id;
                    const vctoCD = item.vctoCD
                    const tipoCD = item.tipoCD
                    const telefone = item.telefone
                    const titulo = item.titulo
                    const email = item.email
                    const titulo_doc = item.titulo_doc
                    ErrorSms.push( inicio, { id, vctoCD, tipoCD, telefone, titulo, titulo_doc, email } )

                    if ( quant === index + 1 )
                    {
                        console.log( message = 'Todas as mensagens fora enviadas' )
                        if ( ErrorSms !== '' || undefined )
                            writeFile( filePath, JSON.stringify( ErrorSms, null, 2 ), 'utf-8' )
                                .then( () => {
                                    console.log( 'criado com susseso' )
                                } ).catch( error => {
                                    console.error( 'arqiovo não foi escrito' )
                                } )
                        console.log( { status: 500, message: 'Os Telefones estam incorretos foran salvos par relatorio', error } )
                        const resp = { status: 500, message: 'Os Telefones estam incorretos foran salvos par relatorio', error };
                        return JSON.stringify( resp, null, 2 )
                    }

                    console.error( 'Este telefone ' + item.telefone + ' não possui whatsapp' )
                    const resp = { status: 500, message: 'Este telefone ' + item.telefone + ' não possui whatsapp', error };
                    return JSON.stringify( resp, null, 2 )
                } );

        }, index * 18000 );
    } )
}

export default enviarSms


export const VerificaSms = async ( lista ) => await Promise.all( lista.map( async item => {

    var config = {
        method: 'post',
        url: `https://api.zapstar.com.br/core/v2/api/wa-number-check/${ item.telefone }`,
        headers: {
            'access-token': process.env.ZAP_TOKEN
        }
    };

    axios( config )
        .then( function ( response ) {
            console.log( JSON.stringify( response.data ) );
        } )
        .catch( function ( error ) {
            console.log( error );

            var data = {
                ref: item.id,
                dia: item.vctoCD,
                tipoCD: item.tipoCD,
                log: item.telefone,
                titulo: item.titulo,
                email: item.email,
                doc: item.titulo_doc
            }
            const url = ''


        } );
} ) )





export const SmsWhatsapp = async ( lista ) => await Promise.all( lista.map( async item => {

} ) );