import { AxioPost } from "../axios_api.js";

export const RegErro = async (lista) =>
  await Promise.all(
    lista.map(async (iten) => {
      const data = {
        ref: iten.id,
        log: iten.telefone,
        dia: iten.venc,
        titulo: iten.titulo,
        email: iten.email,
        doc: iten.doc
      };
      const url = "/reg/error";
        const registro = AxioPost(url, data);
        return registro
    })
  );
