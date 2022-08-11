import 'dotenv/config'
import { Router } from 'express';
import { eAdmin } from '../middlewares/auth.js';




import enviarSms from '../lib/enviarSms.js';
import enviarEmail from '../lib/enviarEmail.js';


const router1 = Router()


// session funcionalidades
//---------------------------------------------------------------------------------------------



router1.get('/send/msg', eAdmin, async (req, res) => {

    try {
        const lista = req.body
        const response = await enviarSms(lista)
        const response2 = await enviarEmail(lista)
        res.json(response)
        res.json(response2)

    } catch (error) {
        res.status(400).send(error)
    }

});

router1.get('/send', eAdmin, function (req, res) {
    res.json('ola')
});

router1.get('/itsallok', eAdmin, async (req, res) => {
    res.json("it's all OK")
});

router1.get('/test', eAdmin, async (req, res) => {
    try {
        res.status(200).send('deu certo')
    }
    catch (err) {
        res.status(400).send(err)
    }
});


export default router1