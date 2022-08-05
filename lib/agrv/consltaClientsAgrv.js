import 'dotenv/config';
import Axio from '../axios.js';


const ConsltaClientsAgrv = async (agrv) => await Promise.all(agrv.map(async iten => {

    const destino = `/listar/relatorio/agrv/${iten.numeropolo}`
    const resp = await Axio(destino)
    const obj = {
        id: iten.idagrv, nome: iten.nome, polo: iten.numeropolo, status: iten.permissaoacesso, data: resp
    };
    if (!obj) {
        throw new Error('Deu ruim')
    }
    return obj;

}))

export default ConsltaClientsAgrv