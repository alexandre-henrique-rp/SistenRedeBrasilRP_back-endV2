import "dotenv/config";
import axios from "axios";

export const WhatsAppSms = async (tel, msg) => {
  const url = "https://api.zapstar.com.br/core/v2/api/chats/send-text";

  const resposta = await axios({
    method: "POST",
    url: url,
    headers: {
      "access-token": process.env.ZAP_TOKEN,
      "Content-Type": process.env.ZAP_TYPE
    },
    data: {
      number: 55 + tel,
      message: msg,
      forceSend: true,
      verifyContact: false
    },
    redirect: "follow"
  })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return "Mensagem entregue";
    })
    .catch((error) => {
      console.log("error", error);
      return "não foi possível contactar o esse cliente, tente outra forma de contato";
    });
  return resposta;
};

export const WhatsAppVerific = async (tel) => {
  const telefone = tel;
  const url =
    "https://api.zapstar.com.br/core/v2/api/wa-number-check/55" + telefone;

  const resposta = await axios({
    method: "POST",
    url: url,
    headers: {
      "access-token": process.env.ZAP_TOKEN,
      "Content-Type": process.env.ZAP_TYPE
    },
    redirect: "follow"
  })
    .then((response) => {
      console.log(response.data);
      const resultado = response.data;
      const resp =
        resultado.status !== "VALID_WA_NUMBER"
          ? { resultado: resultado, telefone: telefone }
          : { resultado: resultado, telefone: '' };

      return resp;
    })
    .catch(function (error) {
      console.log(error.data);
      const resultado = error.data;
      return {
        resultado,
        telefone
      };
    });
  return resposta;
};
