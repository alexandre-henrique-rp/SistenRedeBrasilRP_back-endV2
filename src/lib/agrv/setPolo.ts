import { AxioGet } from "../axios_api";


export const SetPolo = async () => {
  const destino = `/list/user/max/polo`;
  const resp = await AxioGet(destino);

  if (!resp) {
    const data: any = {
      status: 404,
      msg: 'polo não encontrado',
    };
    throw new Error(data);
  }
  return resp;
};
