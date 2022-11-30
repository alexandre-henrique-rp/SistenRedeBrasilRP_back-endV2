import { AxioGet } from "../axios_api";


export const PesqisaATV = async ( cont: any[] ) => await Promise.all( cont.map( async iten => {

    const destino = `/pesqisa/cliente/${ iten.nome }`;
    const resp = await AxioGet(destino);
    
    const obj = { id: iten.codigo, nome: iten.nome, data: resp };
    if ( !obj )
    {
      const data: any = {
        status: 404,
        msg: "Não existe Clinet para o Contador",
      };
      throw new Error(data);
    }
    return obj;
} ) )


