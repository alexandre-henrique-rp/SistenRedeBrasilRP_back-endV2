import 'dotenv/config'
import axios from 'axios';

const clienteHttp = axios.create({
    baseURL: process.env.SERVE_CONSULT
});


const ConsltaClientsAgrv = (agrv) => {
var lista = []
    const consulta = agrv.map(async(iten) => {
        const resp = await clienteHttp.get(`/listar/relatorio/agrv/${iten.numeropolo}`).then(function (response) {
            const data = response.data;
            const obj = {polo: iten.numeropolo, nome: iten.nome, data: data}
            return obj;
        });
        lista.push = resp
        console.log(resp)
    });
    return consulta
}

module.exports = ConsltaClientsAgrv