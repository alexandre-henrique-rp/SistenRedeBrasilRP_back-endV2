const axios = require('axios');


const RelatorioPricipal = async (response) => {
    const clienteHttp = axios.create({
        baseURL: process.env.SERVE_CONSULT
    });
    const resp = clienteHttp.get("/listar/agrv").then(function (response) {
        const data = response.data
        return data
    })
    const agrv = resp
    
}

module.exports = RelatorioPricipal