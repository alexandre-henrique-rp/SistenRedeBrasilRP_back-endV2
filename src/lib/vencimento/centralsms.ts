import { EmailVenc } from "../../api/emailVencimento";
import { GetErro } from "./geterro";


export const CentralSms = async (lista: any) => {
    // await EmailVenc(lista);
    await GetErro(lista);
    return "mensagens enviadas";
};