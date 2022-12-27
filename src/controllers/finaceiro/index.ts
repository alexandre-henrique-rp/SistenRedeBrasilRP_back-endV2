import { FinacCobranca } from "./FinaceiroController/cobranca";
import { CobrancaEmiss } from "./FinaceiroController/cobrancaemiss";
import { CobrancId } from "./FinaceiroController/cobrancId";
import { DashbordFinac } from "./FinaceiroController/dashbord";
import { ListBoletoAberto } from "./FinaceiroController/listBoletoA";
import { ListBoletoGerado } from "./FinaceiroController/listBoletoG";
import { ListCobranc } from "./FinaceiroController/listCobranca";
import { BtmCobranc } from "./FinaceiroController/sms";


const FinanceController = {
  FinacCobranca,
  BtmCobranc,
  CobrancaEmiss,
  DashbordFinac,
  ListCobranc,
  CobrancId,
  ListBoletoGerado,
  ListBoletoAberto
};

export default FinanceController;