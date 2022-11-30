import axios from 'axios';

export const AxioGetData = async (url: string, data: any) => {
  const resp = await axios({
    method: 'get',
    url: process.env.SERVE_CONSULT + url,
    data: data,
  })
    .then((response) => {
      const data = response.data;
      console.log('Deu tudo certo');
      return data;
    })
    .catch((erro) => {
      console.error('erro');
      return erro;
    });
  const result = await resp;
  return result;
};
