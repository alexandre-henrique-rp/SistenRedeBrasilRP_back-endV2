import express from 'express';
import {AgrController} from '../controllers/agr';
import TokenController from '../controllers/verific';

export const AgrRouter = express.Router();

// AGR
// ---------------------------------------------------------------------------
AgrRouter.post('/login/agr', AgrController.LoginAgr);
AgrRouter.post('/verific/token', TokenController.VerificToken);
AgrRouter.post('/cadastrar/agr', AgrController.createAgr);
AgrRouter.get('/producao/agr/', AgrController.Produção);