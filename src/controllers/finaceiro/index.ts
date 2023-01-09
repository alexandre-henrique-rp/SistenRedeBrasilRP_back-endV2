import { FinacCobranca } from "./FinaceiroController/cobranca";
import { CobrancaEmiss } from "./FinaceiroController/cobrancaemiss";
import { CobrancId } from "./FinaceiroController/cobrancId";
import { DashbordFinac } from "./FinaceiroController/dashbord";
import { FinacErp } from "./FinaceiroController/erp";
import { ListCobranc } from "./FinaceiroController/listCobranca";
import { BtmCobranc } from "./FinaceiroController/sms";


const FinanceController = {
  FinacCobranca,
  BtmCobranc,
  CobrancaEmiss,
  DashbordFinac,
  ListCobranc,
  CobrancId,
  FinacErp
};

export default FinanceController;