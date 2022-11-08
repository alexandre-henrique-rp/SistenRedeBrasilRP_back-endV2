import {VencSms} from "./enviarsms.js";
import {GetErro} from "./geterro.js";

export const EnviaSms = async (lista) => {
    // const resposta = await GetErro(lista);
    console.log(resposta);
    const enviar = await VencSms(lista);
    return enviar;
};
