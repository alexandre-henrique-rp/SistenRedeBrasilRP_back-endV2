import { WhatsAppSms } from "../../api/whatsapp";



export const VencSms = async (lista: any[]) => {
  const resp = lista.forEach(function (iten, index) {
    setTimeout(async function () {
      return await WhatsAppSms(iten.telefone, iten.sms);
    }, index * 18000);
  });
  return resp;
};
