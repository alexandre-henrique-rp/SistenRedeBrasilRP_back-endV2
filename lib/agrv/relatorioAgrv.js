import 'dotenv/config'
import Axio from '../axios.js';

const RelatorioPricipal = async () => {

    const destino = `/listar/agrv`
    const resp = await Axio(destino)
    if (!resp) {
        throw new Error({
            status: 404,
            data: 'Deu Ruim 1'
        })
    }
    return resp;

}

export default RelatorioPricipal