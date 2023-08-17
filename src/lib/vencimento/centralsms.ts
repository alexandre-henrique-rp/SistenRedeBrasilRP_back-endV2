import { GetErro } from "./geterro";


export const CentralSms = async (lista: any) => {
    await GetErro(lista);
    return "mensagens enviadas";
};