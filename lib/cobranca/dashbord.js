import { GetLista, QtDiaEmssao, tdPrice, VideoPorct } from "./dasbordCal.js";

export const DashBord = async () => {
  const getresp = await GetLista();
  const QtDia = await QtDiaEmssao(getresp);
  const QtVideo = await VideoPorct(getresp);
  const Totalvend = await tdPrice(getresp);

  return {
    totalCert: getresp.length,
    QutDia: QtDia,
    PorctVideo: QtVideo,
    Totalvend: Totalvend
  };
};
