import AxioGet from "../axios.js"



export const PesqisaCont = async () => {

    const destino = `/pesqisa/contador`;
    const resp = await AxioGet(destino);
    if (!resp) {
        throw new Error('Deu ruim contador 1')
    }
    return resp;
}

export const PesqisaATV = async (cont) => await Promise.all(cont.map(async iten => {

    const destino = `/pesqisa/cliente/${iten.nome}`;
    const resp = await AxioGet(destino);
    const obj = { id: iten.codigo, nome: iten.nome, data: resp };
    if (!obj) {
        throw new Error('Deu ruim contador 2')
    }
    return obj;
}))


