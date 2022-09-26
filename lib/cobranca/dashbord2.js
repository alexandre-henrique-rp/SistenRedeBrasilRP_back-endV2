
import {ValorMin} from "./calculos/valmim.js";
import {ValVendDia} from "./calculos/valVendDia.js";

export const DashBord2 = async (get) => {
  const lista = get.data;
    const valcertdia = await ValVendDia(lista)
    const ValMin = await ValorMin(valcertdia);

  return {
    valCerdia: valcertdia.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }),
    valmin: ValMin
  };
};
