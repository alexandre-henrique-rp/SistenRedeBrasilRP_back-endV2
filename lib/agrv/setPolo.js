import 'dotenv/config'
import axios from 'axios';

export const SetPolo = async () => {
    
    const destino = `list/user/max/polo`
    const methodo = 'get'
    const info = [ destino, methodo ];
    const resp = await AxioGet( info )
    if ( !resp )
    {
        throw new Error( {
            status: 404,
            data: 'Deu Ruim 1'
        } )
    }
    return resp;
   
}

