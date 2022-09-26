import { VideoPorct } from "./calculos/porcentVideo.js";
import { QtDiaEmssao } from "./calculos/qutCertDia.js";
import { tdPrice } from "./calculos/totalBruto.js";
import { TdPriceLiquido } from "./calculos/totalLiquido.js";
import {Custo} from "./calculos/custoTotal.js";

export const DashBord = async (get) => {
  const totalMes = get.TotalMes;
  const lista = get.data;
  const QtDia = await QtDiaEmssao(lista);
  const QtVideo = await VideoPorct(lista);
  const Totalvend = await tdPrice(lista);
  const custo = await Custo(lista);
  const totalLiquido = await TdPriceLiquido(Totalvend, custo);

  return {
    totalCert: totalMes,
    QutDia: QtDia.length,
    PorctVideo: QtVideo,
    Totalvend: Totalvend.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }),
    TotalCust: custo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }),
    TotalLiqu: totalLiquido.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  };
};
