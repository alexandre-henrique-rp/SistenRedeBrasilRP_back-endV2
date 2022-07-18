require('dotenv').config()
const { Router } = require('express')


const router1 = Router()

const enviarSms = require('../lib/enviarSms')
const enviarEmail = require('../lib/enviarEmail')
const Agr = require('../model/agr')

// const FileWrite = require('../lib/write_tel')

router1.post('/login', async (req, res) => {

    const user = await Agr.findOne({
        attributes: ['idagr', 'usuario', 'senha', 'nome', 'c_unidade', 'polo', 'bloc_filial', 'bloco_de_notas', 'bt_producao', 'bt_comissao', 'tabela_voucher', 'ver_t_custo', 'bloc_vl_comicao', 'bloquearINT',
            'bt_ag_indica', 'bt_sol_boleto', 'bloc_bt_bol_fcw', 'bloc_bt_nfe_fcw', 'bloc_cont_obs', 'bt_financeiro', 'A1PF', 'A3PF-12', 'A3PF-24', 'A3PF', 'A3PF-HSM-1ano', 'A1PJ', 'A3PJ-12', 'A3PJ-24', ' A3PJ', ' A3PJ-HSM-1ano',
            'bloc_nuvem', 'verComissaoParceiro'],
        where: {
            email: req.body.email,
        }
    });


    if (user === null) { //verifica se o usuario existe
        return res.status(400).end({
            erro: true,
            message: 'Erro: Usuário ou senha incorreto!'
        });
    };

    const match = req.body.senha
    if (!match) {
        return res.status(400).json({
            erro: true, message: 'Erro: Usuário ou senha incorreto!'
        });
    }

    return res.json({
        user: {
            id: user.idagrv,
            nome: user.nome,
            numeropolo: user.numeropolo,
            cel: user.whatsapp,
            a1pf: user.a1pf_12m,
            a3pf: user.a3pf_36m,
            a1pj: user.a1pj_12m,
            a3pj: user.a3pj_36m,
        },
        token: token

    });
});

router1.get('/send/msg', async (req, res) => {

    const lista = req.body

    const response = await enviarSms(lista)
    const response2 = await enviarEmail(lista)

    res.json(response)
    res.json(response2)
})

router1.get('/send', function (req, res) {
    res.json('ola')
});

module.exports = router1