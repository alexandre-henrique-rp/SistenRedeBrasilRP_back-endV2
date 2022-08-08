import 'dotenv/config'
import { Router } from 'express';
import { eAdmin } from '../middlewares/auth.js';

const router5 = Router()


// session clinte

// ---------------------------------------------------------------------------

router5.put('/test2', async (req, res) => {
    try {
      const pesqicont = await
        res.send();
    } catch (error) {
        res.status(400).send('Deu Ruim o relatorio dos contadores')
    }
});

router5.put('/pesqisa/contador', async (req, res) => {
   
});

router5.put('/pesqisa/cliente', async (req, res) => {
   
});

export default router5;