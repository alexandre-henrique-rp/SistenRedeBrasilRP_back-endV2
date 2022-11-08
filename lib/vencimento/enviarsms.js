import { WhatsAppSms } from "../../biblioteca/whatsapp.js";

export const VencSms = async (lista) => {
  const resp = await lista.forEach(function (iten, index) {
    console.log(iten.telefone);
    setTimeout(async function () {
      return await WhatsAppSms(iten.telefone, iten.sms);
    }, index * 18000);
  });
  return resp;
};
