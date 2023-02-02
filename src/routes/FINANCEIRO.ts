import express from 'express';
import FinanceController from '../controllers/finaceiro';
import { eAdmin } from '../middlewares/auth';

const FinanceiroRouter = express.Router();

//financeiro
// ---------------------------------------------------------------------------
FinanceiroRouter.get('/combranca',FinanceController.FinacCobranca);// lista geral de falta de pagamento
FinanceiroRouter.post('/combranca/sms', FinanceController.BtmCobranc);// bt falta de pagamento 
FinanceiroRouter.get('/combranca/relat/emissao', FinanceController.CobrancaEmiss);
FinanceiroRouter.get('/combranca/relat/dashbord', FinanceController.DashbordFinac);// dashboard geral
FinanceiroRouter.get('/combranca/lista', FinanceController.ListCobranc);
FinanceiroRouter.put('/combranca/update/relat/:id', FinanceController.CobrancId);
FinanceiroRouter.get('/combranca/get/relat/:id', FinanceController.GetClienteId);
FinanceiroRouter.get('/combranca/relat/boleto/gerado', FinanceController.ListBoletoGerado);
FinanceiroRouter.get('/combranca/relat/boleto/aberto', FinanceController.ListBoletoAberto);
FinanceiroRouter.get('/combranca/relat/erp/aberto', FinanceController.ListErp);
FinanceiroRouter.put('/combranca/relat/erp/:id', FinanceController.ErpUpdate);
FinanceiroRouter.put('/combranca/pg/erp/:polo', FinanceController.ErpPgPolo);
FinanceiroRouter.get('/combranca/relat/pendura/aberto', FinanceController.PenduraCobranca);

// pix 
// gerar img.pmg e salvar no db
FinanceiroRouter.get('/combranca/pix/qrcode/:id', FinanceController.GetQrcodeId);




export { FinanceiroRouter };
