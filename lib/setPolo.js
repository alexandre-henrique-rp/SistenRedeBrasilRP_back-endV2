import 'dotenv/config'
import axios from 'axios';

const SetPolo = async() => {
    
    const clienteHttp = axios.create({
        baseURL: process.env.SERVE_CONSULT
    });
    const resp = clienteHttp.get("list/user/max/polo").then(function (response) {
        const data = response.data
        return data
    })
    const polo = resp
    return polo
}

module.exports = SetPolo