import { AxioGet } from "../axios_api.js";
import { AxioGetData } from "../axios_api2.js";

export const GetVencimento15 = async () => {
  const url15 = "/cliente-15";
  const getVence15 = await AxioGet(url15);
  const List15 = await Promise.all(
      getVence15.map(async (iten) => {
        const nome = iten.nome;
        const id = iten.id;
        const contador = iten.contador;
        const titulo = iten.titulo;
        const doc = iten.titulo_doc;
        const tipoCD = iten.tipoCD;
        const dia = "em: *15 dia*";
        const dia1 = "em: 15 dia";
        const venc = `vencimento ${dia1}`;
        const telefone = iten.telefone;
        const Vencimento = iten.vctoCD;
        const email = iten.email;
        const Dia = Vencimento.substr(8, 2);
        const Mes = Vencimento.substr(5, 2);
        const Ano = Vencimento.substr(0, 4);
        const Date = Dia + "/" + Mes + "/" + Ano;
        const sms =
          "Prezado Cliente\n\nEstamos entrando em contato para informar que o seu Certificado digital\nModelo: *" +
          tipoCD +
          ". - " +
          titulo +
          ",*\n*" +
          doc +
          "* \nExpira " +
          dia +
          "\n *" +
          Date +
          "*\nfc:" +
          id +
          "\n\nNão deixe para a última hora, Entre em contato agora\npelo WhatsApp (16) 3325-4134 e renove o seu certificado.\nAtenciosamente Equipe Rede Brasil Rp";
        const urlCont = `/pesqisa/getcontador`;
        const data = { contador: contador };
        const consultCont = await AxioGetData(urlCont, data);
        const emailCont =
          consultCont.email === undefined ? "" : consultCont.email;

        return {
          id,
          nome,
          titulo,
          doc,
          tipoCD,
          dia1,
          venc,
          telefone,
          Vencimento,
          Date,
          email,
          emailCont,
          contador,
          sms
        };
      })
    );

  return List15;
};
