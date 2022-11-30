import express from 'express';
import AgrvController from '../controllers/agrv';
import { eAdmin } from '../middlewares/auth';

const AgrvRouter = express.Router();
// session AGRV
// ------------------------------------------------------------------------------------------------

AgrvRouter.post('/cadastrar/agrv', eAdmin, AgrvController.CreateAgrv);
AgrvRouter.get('/listar/agrv', eAdmin, AgrvController.AgrvAll);
AgrvRouter.get('/listar/agrv/:id', eAdmin, AgrvController.AgrvId);
AgrvRouter.put('/update/agrv/:id', eAdmin, AgrvController.AgrvUpdate);
AgrvRouter.put('/pg/agrv/:polo', eAdmin, AgrvController.AgrvPgPolo);
AgrvRouter.get('/list/user/max/polo', eAdmin, AgrvController.MaxPolo);
AgrvRouter.get(
  '/listar/relatorio/agrv/:polo',
  eAdmin,
  AgrvController.AgrvRelat,
);
AgrvRouter.get(
  '/listar/clientes/agrv/:polo',
  eAdmin,
  AgrvController.RelatClientAgrv,
);
AgrvRouter.get('/faturamento/agrv', eAdmin, AgrvController.FatureAgrv);
AgrvRouter.put('/block/agrv/cliente/:id', AgrvController.BlocAgrv);

export { AgrvRouter };
