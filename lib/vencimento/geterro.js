import { WhatsAppVerific } from "../../biblioteca/whatsapp.js";
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
      const { telefone } = verifyContact;
      const response =
        telefone !== "" ? sucesso.push(lista) : erros.push(lista);
      if (qut === index + 1) {
        RegErro(erros);
        return sucesso;
      }
      console.log(response);
    }, index * 10);
  });
  return resp;
};
