import { AxioGet } from "../../axios_api";


export const GetLista = async () => {
  const url = "/combranca/relat/emissao";
  const get = await AxioGet(url);
  const getFilter = get.filter((s: { id_fcw_soluti: string; }) => s.id_fcw_soluti !== "");
  return {
    TotalMes: getFilter.length,
    data: getFilter
  };
};
