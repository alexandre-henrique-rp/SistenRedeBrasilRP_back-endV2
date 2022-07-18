require('dotenv').config()
const { Router } = require('express')
const { eAdmin } = require('../middlewares/auth');



const router3 = Router()




// ---------------------------------------------------------------------------

// router3.get('/test', async (req, res) => {

//     const response = await SetPolo();
//     const data = await CalcPolo(response)
//     console.log(data)

//     res.json(data)
   
// });




module.exports = router3