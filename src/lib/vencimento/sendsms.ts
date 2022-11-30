import {VencSms} from "./enviarsms";

export const EnviaSms = async (lista: any[]) => {
    const enviar = await VencSms(lista);
    return enviar;
};
