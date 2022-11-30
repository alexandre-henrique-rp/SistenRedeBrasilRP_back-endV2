import axios from "axios";

export const AxioGet = async (url: string) => {
  const resp = await axios({
    method: "get",
    url: process.env.SERVE_CONSULT + url,
  })
    .then((response) => {
      const data = response.data;
      console.log("Deu tudo certo");
      return data;
    })
    .catch((erro) => {
      console.error("erro");
      return erro;
    });
  const result = await resp;
  return result;
};

export const AxioPost = async (url: string, data: any) => {
  const resp = await axios({
    method: "post",
    url: process.env.SERVE_CONSULT + url,
    data: data
  })
    .then((response) => {
      const data = response.data;
      console.log("Sucesso!");
      return data;
    })
    .catch((erro) => {
      console.error("erro");
      return erro;
    });
  const result = await resp;
  return result;
};

export const AxioPut = async (url: string, data: any) => {
  const resp = await axios({
    method: "put",
    url: process.env.SERVE_CONSULT + url,
    data: data
  })
    .then((response) => {
      const data = response.data;
      console.log("Deu tudo certo");
      return data;
    })
    .catch((erro) => {
      console.error("erro");
      return erro;
    });
  const result = await resp;
  return result;
};
