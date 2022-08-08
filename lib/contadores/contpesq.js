import Axio from "../axios"



export const PesqisaCont = async () => {

    const destino = `/listar/agrv`
    const resp = await Axio(destino)

}