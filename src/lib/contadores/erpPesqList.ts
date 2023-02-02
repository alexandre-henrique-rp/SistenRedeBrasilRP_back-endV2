import { AxioGet } from '../axios_api';

export const PesqisaErp = async () => {
  const destino = `/pesqisa/erp`;
  const resp = await AxioGet(destino);
  if (!resp) {
    const data: any = {
      status: 404,
      msg: 'Não existe Contador',
    };
    throw new Error(data);
  }
  return resp;
};