import express from 'express';
import ContadorController from '../controllers/contador';

const ContadorRouter = express.Router();

// contador
// ---------------------------------------------------------------------------
ContadorRouter.get('/relatorio/contador', ContadorController.ContRelat);
ContadorRouter.get('/pesqisa/contador', ContadorController.ContList);
ContadorRouter.get('/pesqisa/erp', ContadorController.ErpList);
ContadorRouter.get(
  '/pesqisa/cliente/:contador',
  ContadorController.ContListClient,
);
ContadorRouter.post('/contador/add', ContadorController.ContCreate);
ContadorRouter.put('/contador/update/:id', ContadorController.ContUpdate);
ContadorRouter.put('/contador/delet/:id', ContadorController.ContDelet);

export { ContadorRouter };
