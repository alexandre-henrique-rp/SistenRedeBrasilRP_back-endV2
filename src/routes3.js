require('dotenv').config()
const { Router } = require('express')
const { eAdmin } = require('../middlewares/auth');



const router3 = Router()




// ---------------------------------------------------------------------------

router3.get('/test', eAdmin, async (req, res) => {

    res.json('deu certo')
});




module.exports = router3