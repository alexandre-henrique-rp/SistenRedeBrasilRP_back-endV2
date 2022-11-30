import { AxioGet } from "../axios_api";

export const GetClinteNfe = async () => {
  const destino = `/get/cliente/nfe`;
  const resp = await AxioGet(destino);
  if (!resp) {
    const data: any = {
      status: 404,
      data: 'Não é possivel buscar os clientes NFE',
    };
    throw new Error(data);
  }
  return resp;
};
