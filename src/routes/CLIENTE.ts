import express from 'express';
import ClienteController from '../controllers/clienete';


const ClienteRouter = express.Router();
// session cliente
// ------------------------------------------------------------------------------------------------

ClienteRouter.get('/cliente2', ClienteController.Get );
ClienteRouter.get('/cliente/get/:id', ClienteController.GetId);
ClienteRouter.get('/cliente/get/:doc', );
ClienteRouter.post('/cliente/add', );
ClienteRouter.put('/cliente/:id', );
ClienteRouter.put('/cliente/delet/:id', );

export { ClienteRouter };
