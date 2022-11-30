import { AxioPost } from "../axios_api";


export const RegErro = async (lista: any[]) =>
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
      return registro;
    })
  );
