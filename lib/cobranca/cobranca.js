import "dotenv/config";
import axios from "axios";

export const Cobranca = async (info) => {
  var smsScript =
    "Ola, tudo bem,\n eu sou da rede brasil rp\n\n\nO motivo do meu contato é para informar que não identificamos seu pagamento ainda\ncaso tenha efetuado o pagamento, por gentileza poderia nos mandar o comprovante \n\nCaso nao, entre em contato o mas rápido possível,\n e evite o bloqueio do seu certificado.";

  const requestOptionsDefault = {
    headers: {
      "access-token": process.env.ZAP_TOKEN,
      "Content-Type": process.env.ZAP_TYPE
    },
    redirect: "follow"
  };
  axios
    .post(
      process.env.ZAP_URL_API,
      JSON.stringify({
        number: 55 + info,
        message: smsScript,
        forceSend: true,
        verifyContact: true
      }),
      requestOptionsDefault
    )
    .then((response) => {
      console.log(response.data.status);
       console.log("Mensagem enviada com sucesso");
      return "Mensagem enviada com sucesso";
    })
    .catch((error) => {
      console.error(error.message)
      console.log("Este telefone " + info + " não possui whatsapp");
      const res = "Este telefone " + info + " não possui whatsapp";
      return res;
    });
};
