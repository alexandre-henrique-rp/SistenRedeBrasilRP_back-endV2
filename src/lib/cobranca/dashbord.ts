import { Custo } from './calculos/custoTotal';
import { VideoPorct } from './calculos/porcentVideo';
import { QtDiaEmssao } from './calculos/qutCertDia';
import { tdPrice } from './calculos/totalBruto';
import { TdPriceLiquido } from './calculos/totalLiquido';

export const DashBord = async (get: { TotalMes: any; data: any }) => {
  const totalMes = get.TotalMes;
  const lista = get.data;

  if (lista.length !== 0) {
    const QtDia = await QtDiaEmssao(lista);
    const QtVideo = await VideoPorct(lista);
    const Totalvend = await tdPrice(lista);
    const custo = await Custo(lista);
    const totalLiquido = await TdPriceLiquido(Totalvend, custo);

    return {
      totalCert: totalMes,
      QutDia: QtDia.length,
      PorctVideo: QtVideo,
      Totalvend: Totalvend.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
      TotalCust: custo.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
      TotalLiqu: totalLiquido.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    };
  } else {
    const zero = 0
    return {
      totalCert: zero,
      QutDia: zero,
      PorctVideo: zero,
      Totalvend: zero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
      TotalCust: zero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
      TotalLiqu: zero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    };
  }
};
