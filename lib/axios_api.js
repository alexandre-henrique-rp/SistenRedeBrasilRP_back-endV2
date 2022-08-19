import "dotenv/config";
import axios from "axios";

export const AxioGet = async (url) => {
  const resp = await axios({
    method: "get",
    url: `http://localhost:3050/${url}`,
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

export const AxioPost = async (url, data) => {
  const resp = await axios({
    method: "post",
    url: `http://localhost:3050/${url}`,
    data: data,
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

export const AxioPut = async (url, data) => {
  const resp = await axios({
    method: "put",
    url: `http://localhost:3050/${url}`,
    data: data,
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

export const AxioGet1 = async (info) => {
  const resp = await axios({
    method: "get",
    url: `http://localhost:3050`,
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
