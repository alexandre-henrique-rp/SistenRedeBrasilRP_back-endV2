import 'dotenv/config'
import axios from 'axios';

const RelatorioPricipal = async () => {
    const clienteHttp = axios.create({
        baseURL: process.env.SERVE_CONSULT
    });
    const resp = await clienteHttp.get("/listar/agrv").then(function (response) {
        const data = response.data
        console.log(data)
        return data
    })
   const lista = resp
    return lista
}

module.exports = RelatorioPricipal