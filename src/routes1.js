import 'dotenv/config'
import { Router } from 'express';
import { eAdmin } from '../middlewares/auth.js';
import { Op } from "sequelize";



import enviarSms from '../lib/enviarSms.js';
import enviarEmail from '../lib/enviarEmail.js';
import Agrv from '../model/agrv.js';
import Client from '../model/fcweb.js';

const router1 = Router()


router1.get('/listar/agrv', async (req, res) => {
    const agrv = await Agrv.findAll({
        attributes: ['idagrv', 'nome', 'numeropolo'],
        where: {
            painel_agrv: 1,
            permissaoacesso: 'PERMITIDO'
        }
    })
        .then((agrv) => {
            res.json(agrv)
           
        })
        .catch((err) => {
            console.log(err)
        })
});

router1.get('/listar/relatorio/agrv/:polo', async (req, res) => {

    const agrv = await Client.findAll({
        attributes: ['id', 'nome', 'razaosocial', 'cnpj', 'cpf', 'unidade', 'estatos_pgto', 'andamento', 'telefone', 'scp', 'custoCdpar', 'tipocd', 'valorcd', 'custocd', 'comissaoparceiro'],
        where: {
            unidade: req.params.polo,
            andamento: {
                [Op.or]: ['EMITIDO', 'APROVADO']
            }
        }

    })
        .then((agrv) => {
            res.json(agrv)
            
        })
        .catch((err) => {
            console.log(err)
        })
});

router1.get('/send/msg', async (req, res) => {

    const lista = req.body

    const response = await enviarSms(lista)
    const response2 = await enviarEmail(lista)

    res.json(response)
    res.json(response2)
});

router1.get('/send', eAdmin, function (req, res) {
    res.json('ola')
});

router1.get('/itsallok', eAdmin, async (req, res) => {
    res.json("it's all OK")
});


module.exports = router1