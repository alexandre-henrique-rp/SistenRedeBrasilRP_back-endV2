import { VencSms } from "./enviarsms.js";
import {GetErro} from "./geterro.js";

export const EnviaSms = async (lista) => {
    const resposta = await GetErro(lista);
    const enviar = VencSms(resposta)
    return enviar;
};
