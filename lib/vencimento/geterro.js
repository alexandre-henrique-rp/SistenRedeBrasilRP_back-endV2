import {WhatsAppVerific} from "../../biblioteca/whatsappVerific.js";
import {VencSms} from "./enviarsms.js";
import { RegErro } from "./regerro.js";

export const GetErro = async (lista) => {
  const erros = [];
  const sucesso = [];
  const qut = lista.length;

  const resp = await lista.forEach(function (item, index) {
    setTimeout(async function () {
      const verifyContact = await WhatsAppVerific(item.telefone);
      const lista = {
        id: item.id,
        titulo: item.titulo,
        doc: item.doc,
        tipoCD: item.tipoCD,
        dia1: item.dia1,
        venc: item.venc,
        telefone: item.telefone,
        Vencimento: item.Vencimento,
        Date: item.Date,
        email: item.email,
        sms: item.sms
      };
      if (qut === index + 1) {
        await RegErro(erros);
        return await VencSms(sucesso);
      };
      if (verifyContact.resultado.status !== "INVALID_WA_NUMBER") {
        sucesso.push(lista);
      };
      if (verifyContact.resultado.status === "INVALID_WA_NUMBER") {
        erros.push(lista);
      };
    }, index * 1000);
  });
  return "mensagen enviada";
};
