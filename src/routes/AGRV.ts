import express from 'express';
import AgrvController from '../controllers/agrv';
import { eAdmin } from '../middlewares/auth';

const AgrvRouter = express.Router();
// session AGRV
// ------------------------------------------------------------------------------------------------

AgrvRouter.post('/cadastrar/agrv', AgrvController.CreateAgrv);
AgrvRouter.get('/listar/agrv', AgrvController.AgrvAll);
AgrvRouter.get('/listar/agrv/:id', AgrvController.AgrvId);
AgrvRouter.put('/update/agrv/:id', AgrvController.AgrvUpdate);
AgrvRouter.put('/pg/agrv/:polo', AgrvController.AgrvPgPolo);
AgrvRouter.get('/list/user/max/polo', AgrvController.MaxPolo);
AgrvRouter.get(
  '/listar/relatorio/agrv/:polo',
  AgrvController.AgrvRelat,
);
AgrvRouter.get(
  '/listar/clientes/agrv/:polo',
  AgrvController.RelatClientAgrv,
);
AgrvRouter.get('/faturamento/agrv', AgrvController.FatureAgrv);
AgrvRouter.put('/block/agrv/cliente/:id', AgrvController.BlocAgrv);

export { AgrvRouter };
