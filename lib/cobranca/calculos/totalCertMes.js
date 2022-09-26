import { AxioGet } from "../../axios_api.js";

//pesquisa de todo contatos mes
export const GetLista = async () => {
  const url = "combranca/relat/emissao";
  const get = await AxioGet(url);
  const getFilter = get.filter((s) => s.id_fcw_soluti !== "");
  return {
    TotalMes: getFilter.length,
    data: getFilter
  };
};
