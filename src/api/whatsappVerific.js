import "dotenv/config";
import axios from "axios";


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
      return resultado;
    })
    .catch(function (error) {
      console.log(error.data);
      const resultado = error.data;
      return resultado;
    });
  return resposta;
};