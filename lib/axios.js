import 'dotenv/config';
import axios from 'axios';



const clienteHttp = axios.create({
    baseURL: process.env.SERVE_CONSULT
});

const Axio = async (info) => {
    const resp = await clienteHttp.get(info)
        .then(response => {
            const data = response.data;
            console.log('Deu tudo certo')
            return data
        })
        .catch(erro => console.error('Deu ruim'));
    const result = await resp
    return result
}

export default Axio