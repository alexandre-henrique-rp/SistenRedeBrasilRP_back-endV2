import 'dotenv/config'

import { Router } from 'express';
import { eAdmin } from '../middlewares/auth.js';



const router3 = Router()




// ---------------------------------------------------------------------------

router3.get('/test', eAdmin, async (req, res) => {

    res.json('deu certo')
});




module.exports = router3