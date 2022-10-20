import 'dotenv/config'
import {AxioGet} from '../axios_api.js';


export const SetPolo = async () => {
    const destino = `/list/user/max/polo`
    const resp = await AxioGet(destino);
    
    if ( !resp )
    {
        throw new Error( {
            status: 404,
            data: 'Deu Ruim 1'
        } )
    }
    return resp;
   
}

