import { AxioGet } from "../axios_api";


export const ConsltaClientsAgrv = async (agrv: any[]) =>
  await Promise.all(
    agrv.map(async (iten) => {
      const destino = `/listar/relatorio/agrv/${iten.numeropolo}`;
      const resp = await AxioGet(destino);
      const obj = {
        id: iten.idagrv,
        nome: iten.nome,
        polo: iten.numeropolo,
        status: iten.permissaoacesso,
        painel: iten.painel_agrv,
        data: resp,
      };
      if (!obj) {
        throw new Error('Deu ruim 2');
      }
      return obj;
    }),
  );

// export default ConsltaClientsAgrv
