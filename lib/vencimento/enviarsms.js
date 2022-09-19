import { WhatsAppSms } from "../../biblioteca/whatsapp.js";

export const VencSms = async (lista) => {
  const resp = await lista.forEach((item, index) => {
    setTimeout(async () => {
      const sendContact = await WhatsAppSms(item.telefone, item.sms);
      return sendContact;
    }, index * 18000);
  });
  return resp;
};
