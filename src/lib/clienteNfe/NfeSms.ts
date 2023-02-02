import { WhatsAppSms } from "../../api/whatsapp";

export const NfeSms = async (lista: any[]) => {
  const quant = lista.length;

  lista.forEach(function (item, index) {
    setTimeout(async function () {
      const Dia = item.Vencimento.substr(8, 2);
      const Mes = item.Vencimento.substr(5, 2);
      const Ano = item.Vencimento.substr(0, 4);
      const tel = '55' + item.TEL1;
      const sms = `Prezado Cliente\n ${item.Cliente}\n \nEstamos entrando em contato para informar que a sua mensalidade do emisor de nota \nvence,nos proximos dias, no valor de *R$ ${item.Valor},00*\n evite o transtornos com o bloqueio da sua conta\nEfetua agora o seu pagamento pelo link abaixo\n\n\n${item.LINK}\n\n\nNão deixe para a última hora\n\nDuvidas? \nentre em comtato pelo WhatsApp (16) 3325-4134.\n\n\nAtenciosamente Equipe Rede Brasil Rp`;

      const sendContact = await WhatsAppSms(item.TEL1, sms);
      if (index + 1 === quant) {
        console.log('Todoas as mensagens de Tel 1 foram enviadas');
      }
      return sendContact;
    }, index * 10000);
  });
};