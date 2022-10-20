import 'dotenv/config'
import axios from 'axios';
import { AxioGet } from '../axios_api.js';
import {WhatsAppSms} from '../../biblioteca/whatsapp.js';


export const GetClinteNfe = async () => {

    const destino = `/get/cliente/nfe`
    const resp = await AxioGet( destino )
    if ( !resp )
    {
        throw new Error( {
            status: 404,
            data: 'Deu Ruim, não conseguima buscar os clientes NFE'
        } )
    }
    return resp;
};


export const NfeSms = async ( lista ) => {
    const quant = lista.length

    lista.forEach( function ( item, index ) {
        setTimeout( async function () {

            const Dia = item.Vencimento.substr( 8, 2 );
            const Mes = item.Vencimento.substr( 5, 2 );
            const Ano = item.Vencimento.substr( 0, 4 );
            const tel = "55" + item.TEL1;
            const sms = `Prezado Cliente\n ${item.Cliente}\n \nEstamos entrando em contato para informar que a sua mensalidade do emisor de nota \nvence, ou já venceu na data : \n*${Dia}/${Mes}/${Ano}*, no valor de *R$ ${item.Valor},00*\n evite o transtornos com o bloqueio da sua conta\nEfetua agora o seu pagamento pelo link abaixo\n\n\n${item.LINK}\n\n\nNão deixe para a última hora\n\nDuvidas? \nentre em comtato pelo WhatsApp (16) 3325-4134.\n\n\nAtenciosamente Equipe Rede Brasil Rp`;

            const sendContact = await WhatsAppSms(item.TEL1, sms);
            if (index + 1 === quant) {
              console.log("Todoas as mensagens de Tel 1 foram enviadas");
            }
            return sendContact;
        }, index * 10000 );
    } )
};

export const list2 = async ( info ) => {
    const data = info.filter( item => item.TEL2 )
    if ( !data )
    {
        throw new Error( 'Deu ruim' )
    }
    return data;
};

export const NfeSms2 = async ( lista ) => {

    const quant = lista.length
   

    lista.forEach( function ( item, index ) {
        setTimeout( async function () {

            const Dia = item.Vencimento.substr( 8, 2 );
            const Mes = item.Vencimento.substr( 5, 2 );
            const Ano = item.Vencimento.substr( 0, 4 );
            const tel = "55" + item.TEL2;

             const sms = `Prezado Cliente\n ${item.Cliente}\n \nEstamos entrando em contato para informar que a sua mensalidade do emisor de nota \nvence, ou já venceu na data : \n*${Dia}/${Mes}/${Ano}*, no valor de *R$ ${item.Valor},00*\n evite o transtornos com o bloqueio da sua conta\nEfetua agora o seu pagamento pelo link abaixo\n\n\n${item.LINK}\n\n\nNão deixe para a última hora\n\nDuvidas? \nentre em comtato pelo WhatsApp (16) 3325-4134.\n\n\nAtenciosamente Equipe Rede Brasil Rp`;

            const sendContact = await WhatsAppSms(item.TEL2, sms);
             if (index + 1 === quant) {
               console.log("Todoas as mensagens de Tel 2 foram enviadas");
             }
             return sendContact;
        }, index * 10000 );
    } )

};
