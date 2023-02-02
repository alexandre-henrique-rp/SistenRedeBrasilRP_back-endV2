import { FinacCobranca } from "./FinaceiroController/cobranca";
import { CobrancaEmiss } from "./FinaceiroController/cobrancaemiss";
import { CobrancId } from "./FinaceiroController/cobrancId";
import { DashbordFinac } from "./FinaceiroController/dashbord";
import { GetClienteId } from "./FinaceiroController/getClienteid";
import { GetQrcodeId } from "./FinaceiroController/imgQrcod";
import { ListBoletoAberto } from "./FinaceiroController/listBoletoA";
import { ListBoletoGerado } from "./FinaceiroController/listBoletoG";
import { ListCobranc } from "./FinaceiroController/listCobranca";
import { ListErp } from "./FinaceiroController/listErp";
import { PenduraCobranca } from "./FinaceiroController/pendurarela";
import { ErpPgPolo } from "./FinaceiroController/pgErp";
import { BtmCobranc } from "./FinaceiroController/sms";
import { ErpUpdate } from "./FinaceiroController/updateErp";


const FinanceController = {
  FinacCobranca,
  BtmCobranc,
  CobrancaEmiss,
  DashbordFinac,
  ListCobranc,
  CobrancId,
  ListBoletoGerado,
  ListBoletoAberto,
  ListErp,
  ErpUpdate,
  ErpPgPolo,
  GetClienteId,
  PenduraCobranca,
  GetQrcodeId
};

export default FinanceController;