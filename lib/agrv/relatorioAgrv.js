import 'dotenv/config'
import AxioGet from '../axios.js';


const RelatorioPricipal = async () => {

    const destino = `/listar/agrv`
    const resp = await AxioGet(destino)
    if (!resp) {
        throw new Error({
            status: 404,
            data: 'Deu Ruim 1'
        })
    }
    return resp;

}

export default RelatorioPricipal