import { AxioGet } from "../axios_api";


export const RelatorioPricipal = async () => {
  const info = '/listar/agrv';
  const resp = await AxioGet(info);
  if (!resp) {
    const data:any = {
      status: 404,
      msg: 'Não existe Lista',
    }
    throw new Error(data);
  }
  return resp;
};
