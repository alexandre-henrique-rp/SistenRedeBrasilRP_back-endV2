import { AxioGet } from "../axios_api";


export const ConsltaClientsErp = async (erp: any[]) =>
  await Promise.all(
    erp.map(async (iten) => {
      const destino = `/pesqisa/cliente/${iten.fantasia}`;
      const resp = await AxioGet(destino);
      console.log(resp)
      const obj = {
        id: iten.id,
        nome: iten.fantasia,
        status: iten.status,
        polo: iten.unidade,
        data: resp,
      };
      if (!obj) {
        throw new Error('Deu ruim 2');
      }
      return obj;
    }),
  );

// export default ConsltaClientsAgrv
