import { GetVencimento30 } from "./getClienteVencimento2.js";
import { GetVencimento15 } from "./getClienteVencimento3.js";
import { GetVencimento10 } from "./getClienteVencimento4.js";
import {GetVencimento5} from "./getClienteVencimento5.js";
import {GetVencimento1} from "./getClienteVencimento6.js";
import {GetVencimentoNow} from "./getClienteVencimento7.js";

export const GetVencimento = async () => {
  const getVence30 = await GetVencimento30();
  const getVence15 = await GetVencimento15();
  const getVence10 = await GetVencimento10();
  const getVence5 = await GetVencimento5();
  const getVence1 = await GetVencimento1();
  const getVenceNow = await GetVencimentoNow();
 
  const list = [
    ...getVence30,
    ...getVence15,
    ...getVence10,
    ...getVence5,
    ...getVence1,
    ...getVenceNow
  ];

  return list;
};
