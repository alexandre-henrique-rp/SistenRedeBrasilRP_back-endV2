import express from 'express';
import FinanceController from '../controllers/finaceiro';
import { eAdmin } from '../middlewares/auth';

const FinanceiroRouter = express.Router();

//financeiro
// ---------------------------------------------------------------------------
FinanceiroRouter.get('/combranca',FinanceController.FinacCobranca);// envia mensagem botão emvia mesagem falta de pagamento
FinanceiroRouter.get('/combranca/sms', FinanceController.BtmCobranc);
FinanceiroRouter.get('/combranca/relat/emissao', FinanceController.CobrancaEmiss);
FinanceiroRouter.get('/combranca/relat/dashbord', FinanceController.DashbordFinac);
FinanceiroRouter.get('/combranca/lista', FinanceController.ListCobranc);
FinanceiroRouter.put('/combranca/update/relat/:id', FinanceController.CobrancId);
FinanceiroRouter.get('/combranca/relat/boleto/gerado', FinanceController.ListBoletoGerado);
FinanceiroRouter.get('/combranca/relat/boleto/aberto', FinanceController.ListBoletoAberto);

export { FinanceiroRouter };
