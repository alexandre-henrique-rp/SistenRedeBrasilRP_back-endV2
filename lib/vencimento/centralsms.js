import {EmailVenc} from "../../biblioteca/emailVencimento.js";
import {GetErro} from "./geterro.js";

export const CentralSms = async (lista) => {
    await EmailVenc(lista);
    await GetErro(lista);
    return "mensagens enviadas";
};