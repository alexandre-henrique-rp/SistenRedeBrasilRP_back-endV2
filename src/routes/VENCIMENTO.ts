import express from 'express';
import ContadorController from '../controllers/contador';
import VencController from '../controllers/vencimento';
import { verifyADM } from '../middlewares/adm';

export const VencimentoRouter = express.Router();

// vencimento
//---------------------------------------------------------------------------------------------
VencimentoRouter.post('/reg/error', VencController.CreatErro);
VencimentoRouter.get('/log/error', VencController.GetErroVenc);
VencimentoRouter.get('/send/msg', VencController.SendSms);
VencimentoRouter.get('/send/vencimento', VencController.SendVencimento);
VencimentoRouter.get('/cliente-30', VencController.Get30);
VencimentoRouter.get('/cliente-15', VencController.Get15);
VencimentoRouter.get('/cliente-10', VencController.Get10);
VencimentoRouter.get('/cliente-5', VencController.Get5);
VencimentoRouter.get('/cliente-1', VencController.Get1);
VencimentoRouter.get('/cliente-now', VencController.GetNow);
VencimentoRouter.get('/calendar', VencController.Calendar2);
VencimentoRouter.get('/pesqisa/getcontador', ContadorController.ContSearch);


