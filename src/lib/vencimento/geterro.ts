import { EmailVenc } from "../../api/emailVencimento";
import { WhatsAppVerific } from "../../api/whatsappVerific";
import { VencSms } from "./enviarsms";
import { RegErro } from "./regerro";


export const GetErro = async (lista: any[]) => {
  const erros = [];
  const sucesso = [];
  const qut = lista.length;

  const resp = lista.forEach(function (item, index) {
    setTimeout(async function () {
      const verifyContact = await WhatsAppVerific(item.telefone);
      console.log("🚀 ~ file: geterro.ts:14 ~ verifyContact:", verifyContact)
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
        console.log('foi')
        await RegErro(erros);
        // await VencSms(sucesso);
        await EmailVenc(erros)
      }
      if (verifyContact.status === "INVALID_WA_NUMBER") {
        erros.push(lista);
      } else if (verifyContact.status !== "INVALID_WA_NUMBER") {
        sucesso.push(lista);
      } else {
        erros.push(lista);
      };
    }, index * 700);
  });
  return "mensagen enviada";
};
