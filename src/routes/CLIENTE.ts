import express from 'express';
import ClienteController from '../controllers/clienete';


const ClienteRouter = express.Router();
// session cliente
// ------------------------------------------------------------------------------------------------

ClienteRouter.get('/cliente2', ClienteController.Get );
ClienteRouter.get('/cliente/get/:id', ClienteController.GetId);// pesqisa por id resumido
ClienteRouter.get('/cliente/get/t/:id', ClienteController.GetIdT);// pesquisa por id completa
ClienteRouter.get('/cliente/get/:doc', ClienteController.GetDoc);// pesquisa por documento cpf ou cnpj
ClienteRouter.post('/cliente/add', );
ClienteRouter.put('/cliente/:id', ClienteController.UpdateCliente);
ClienteRouter.put('/cliente/delet/:id', );

export { ClienteRouter };
