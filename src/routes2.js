import 'dotenv/config'
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { eAdmin } from '../middlewares/auth.js';
import { Op } from "sequelize";

import Fcweb from '../model/fcweb.js'
import Agrv from '../model/agrv.js';
import SetPolo from '../lib/agrv/setPolo.js';
import CalcPolo from '../lib/calcPolo.js';
import RelatorioPricipal from '../lib/agrv/relatorioAgrv.js';
import ConsltaClientsAgrv from '../lib/agrv/consltaClientsAgrv.js';
import RelatRevend from '../lib/agrv/relatrevenda.js';

const router2 = Router()

// session AGRV

// ---------------------------------------------------------------------------



// router2.post('/cadastrar/agrv', eAdmin, async (req, res) => {
router2.post('/cadastrar/agrv', async (req, res) => {

    const response = await SetPolo();
    const polo = await CalcPolo(response);

    const user = await Agrv.findOne({
        attributes: ['idagrv', 'nome', 'cpf', 'nascimento', 'rg', 'logradouro', 'numero', 'complemento', 'bairro', 'cep', 'municipio', 'uf', 'whatsapp', 'chavepix', 'tipopix', 'numeropolo', 'a1pj_12m', 'a3pj_36m', 'a1pf_12m', 'a3pf_36m', 'nomepolo', 'ufpolo'],
    });

    var dados = req.body;

    dados.nomepolo = req.body.municipio;
    dados.ufpolo = req.body.uf;
    dados.painel_agrv = 1;
    dados.numeropolo = polo + 1;
    dados.email2 = req.body.senha;
    dados.senha = await bcrypt.hash(dados.senha, 8);

    await Agrv.create(dados)
        .then(() => {
            console.log(dados)
            console.log(user)
            return res.status(200).json({
                message: 'Parceiro de revenda cadastrado com sucesso!',
            });
        }).catch(err => {
            return res.status(400).json({
                error: true,
                message: 'Erro: Não foi possível cadastrar o Parceiro!'
            });
        });

});

router2.get('/listar/agrv', async (req, res) => {
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

router2.get('/list/user/max/polo', async (req, res) => {
    const agrv = await Agrv.findAll({
        attributes: ['idagrv', 'nome', 'numeropolo'],
    })
    res.json(agrv)

});

router2.get('/listar/relatorio/agrv/:polo', async (req, res) => {

    const agrv = await Fcweb.findAll({
        attributes: ['id', 'nome', 'razaosocial', 'cnpj', 'cpf', 'unidade', 'estatos_pgto', 'andamento', 'telefone', 'scp', 'custoCdpar', 'tipocd', 'valorcd', 'custocd', 'comissaoparceiro'],
        where: {
            unidade: req.params.polo,
            scp: "A PAGAR",
            estatos_pgto: 'Pago',
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

router2.get('/listar/clientes/agrv/:polo', eAdmin, async (req, res) => {

    const agrv = await Fcweb.findAll({
        attributes: ['id', 'nome', 'razaosocial', 'cnpj', 'cpf', 'unidade', 'estatos_pgto', 'andamento', 'telefone', 'scp', 'custoCdpar', 'tipocd', 'valorcd', 'custocd', 'comissaoparceiro'],
        where: {
            unidade: req.params.polo,
            scp: "A PAGAR",
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

// router2.get('/faturamento/agrv', eAdmin, async (req, res) => {
router2.get('/faturamento/agrv', async (req, res) => {
    try {
        const agentRevenda = await RelatorioPricipal();
        const relatoRevenda = await ConsltaClientsAgrv(agentRevenda);
        const fature = await RelatRevend(relatoRevenda)
        res.send(fature);
    } catch (error) {
        res.status(400).send('Deu Ruim')
    }
});




export default router2