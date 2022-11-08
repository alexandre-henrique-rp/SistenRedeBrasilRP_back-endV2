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
      console.log(error.response.data);
      return "não foi possível contactar o esse cliente, tente outra forma de contato";
    });
  return resposta;
};

