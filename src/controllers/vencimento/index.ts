import { Calendar2 } from "./venciController/calendar2";
import { CreatErro } from "./venciController/createErro";
import { Get1 } from "./venciController/get1";
import { Get10 } from "./venciController/get10";
import { Get15 } from "./venciController/get15";
import { Get30 } from "./venciController/get30";
import { Get5 } from "./venciController/get5";
import { GetErroVenc } from "./venciController/getErroVenc";
import { GetNow } from "./venciController/getnow";
import { SendSms } from "./venciController/sendsms";
import { SendVencimento } from "./venciController/sendvencimento";



const VencController = {
  CreatErro,
  GetErroVenc,
  SendSms,
  SendVencimento,
  Get30,
  Get15,
  Get10,
  Get5,
  Get1,
  GetNow,
  Calendar2
};

export default VencController;