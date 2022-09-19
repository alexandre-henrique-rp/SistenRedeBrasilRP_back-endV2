import { AxioGet } from "../axios_api.js";

export const GetLista = async () => {
  const url = "combranca/relat/emissao";
  const get = await AxioGet(url);
  return get;
};

export const QtDiaEmssao = async (lista) => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const dataAtual = ano + "-" + mes + "-" + dia;
  const dateFilter = await lista.filter((d) => d.dt_aprovacao === dataAtual);
  return dateFilter.length;
};

export const VideoPorct = async (lista) => {
  const video1 = lista.filter((v) => v.validacao === "VIDEO CONF");
  const video2 = lista.filter((v) => v.validacao === "VIDEO INTERNA");
  const video = [...video1, ...video2];
  const total = parseInt(lista.length);
  const videoNuber = parseInt(video.length);
  const subtacao = total - videoNuber;
  const mutiplica = subtacao * 100;
  const porcetVideo = mutiplica / total;
  return Math.round(porcetVideo);
};

export const tdPrice = async (lista) => {
  const unipice = lista.filter((u) => u.unidade === "1");
  const total1 = await unipice
    .map((v) => (v.valorcd === "" ? parseInt("0") : parseInt(v.valorcd)))
    .reduce((acc, p) => acc + p);
  const reprice = lista.filter((u) => u.unidade !== "1");
  const total2 =
    reprice.length === 0
      ? 0
      : reprice.length === "0"
      ? 0
      : reprice.length === ""
      ? 0
      : reprice
          .map((v) => (v.custocd === "" ? parseInt("0") : parseInt(v.custocd)))
          .reduce((acc, p) => acc + p);
  const total = total1 + total2
  return total;
};
