import { WhatsAppSms } from "../../biblioteca/whatsapp.js";
import {WhatsAppVerific} from "../../biblioteca/whatsappVerific.js";

export const Cobranca = async (info) => {
  try {
    var msg =
      "Ola, tudo bem,\n eu sou da rede brasil rp\n\n\nO motivo do meu contato é para informar que não identificamos seu pagamento ainda\ncaso tenha efetuado o pagamento, por gentileza poderia nos mandar o comprovante \n\nCaso nao, entre em contato o mas rápido possível,\n e evite o bloqueio do seu certificado.";
    
    //verificar se o numero tem whatsapp
    const verifique = await WhatsAppVerific(info)
    const {resultado} = verifique
    //Sim = enviar mensagem 
    if (resultado.status === "VALID_WA_NUMBER") {
      const sms = await WhatsAppSms(info, msg);
      return sms;
      //Não = esse numero não tem whatsapp
    } else {
      return "Esse numero não possui Whatsapp";
    }
  } catch (error) {
    const message = 'não foi possiver efetuar a cobrança'
    return message
  }
};
