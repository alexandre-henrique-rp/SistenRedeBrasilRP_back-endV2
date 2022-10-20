import 'dotenv/config'
import {AxioGet} from '../axios_api.js';



export const RelatorioPricipal = async () => {

    const info = "/listar/agrv";
    const resp = await AxioGet(info);
    if ( !resp )
    {
        throw new Error( {
            status: 404,
            data: 'Deu Ruim 1'
        } )
    }
    return resp;

}
