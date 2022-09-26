export const VideoPorct = async (lista) => {
  const video1 = lista.filter((v) => v.validacao === "VIDEO CONF");
  const video2 = lista.filter((v) => v.validacao === "VIDEO INTERNA");
  const video = [...video1, ...video2];
  const total = parseInt(lista.length);
  const videoNuber = parseInt(video.length);
  const subtacao = total - videoNuber;
  const mutiplica = subtacao * 100;
  const porcetVideo = mutiplica / total;
  const porcentAredond = Math.round(porcetVideo);
  const result = porcentAredond + "%";
  return result;
};
