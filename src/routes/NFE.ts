import express from 'express';
import NfeController from '../controllers/nfe';

const NfeRouter = express.Router();

// nfe
//---------------------------------------------------------------------------------------------
NfeRouter.get('/send/nfe', NfeController.NfeAllSend);
NfeRouter.get('/get/cliente/nfe', NfeController.NfeAllGet);

export { NfeRouter };
