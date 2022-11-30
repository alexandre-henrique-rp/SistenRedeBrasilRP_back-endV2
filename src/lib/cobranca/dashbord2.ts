import { ValorMin } from './calculos/valmim';
import { ValVendDia } from './calculos/valVendDia';

export const DashBord2 = async (get: { data: any }) => {
  const lista = get.data;
  const valcertdia = await ValVendDia(lista);
  const ValMin = await ValorMin(valcertdia);

  return {
    valCerdia: valcertdia.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
    valmin: ValMin,
  };
};
