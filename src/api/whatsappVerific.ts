import "dotenv/config";
import axios from "axios";


export const WhatsAppVerific = async (tel: any) => {
  const telefone = tel;
  const url =
    "https://api.inovstar.com/core/v2/api/wa-number-check/55" + telefone;

  const resposta = await axios({
    method: "POST",
    url: url,
    headers: {
      "access-token": process.env.ZAP_TOKEN,
      "Content-Type": process.env.ZAP_TYPE
    }
  })
    .then((response: any) => {
      const resultado = response.data;
      return resultado;
    })
    .catch(function (error: any) {
      console.log("🚀 ~ file: whatsappVerific.js:26 ~ WhatsAppVerific ~ error:", error.response.data)
      const resultado = { status: 'INVALID_WA_NUMBER', msg: 'status do número' };
      return resultado;
    });
  return resposta;
};
