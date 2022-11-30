import { AxioGetData } from "../axiosGetData";
import { AxioGet } from "../axios_api";

export const GetVencimento5 = async () => {
  const url5 = "/cliente-5";
  const getVence5 = await AxioGet(url5);
  const List5 = await Promise.all(
      getVence5.map(async (iten: { nome: any; id: any; contador: any; titulo: any; titulo_doc: any; tipoCD: any; telefone: any; vctoCD: any; email: any; }) => {
        const nome = iten.nome;
        const id = iten.id;
        const contador = iten.contador;
        const titulo = iten.titulo;
        const doc = iten.titulo_doc;
        const tipoCD = iten.tipoCD;
        const dia = "em: *5 dia*";
        const dia1 = "em: 5 dia";
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

  return List5;
};
