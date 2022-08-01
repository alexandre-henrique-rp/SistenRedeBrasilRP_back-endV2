require('dotenv').config()
const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { eAdmin } = require('../middlewares/auth');



const router2 = Router()

const Agr = require('../model/agr')
const Agrv = require('../model/agrv')
const SetPolo = require('../lib/setPolo')
const CalcPolo = require('../lib/calcPolo')


// ---------------------------------------------------------------------------

// router2.get('/test', async (req, res) => {

//     var dados = req.body;

//     dados.senha = await bcrypt.hash(dados.senha, 8);
//     console.log(dados.senha);

//     return res.json({
//         senha: dados.senha
//     });

// });

router2.get('/list/user/max/polo', async (req, res) => {

    const agrv = await Agrv.findAll({
        attributes: ['idagrv', 'nome', 'email', 'email2', 'senha', 'numeropolo'],
    })
    res.json(agrv)

});

router2.post('/cadastrar/agr', async (req, res) => {

    const agr = Agr.findOne({
        attributes: ['idagr', 'usuario', 'senha', 'nome', 'c_unidade', 'polo', 'bloc_filial', 'bloco_de_notas', 'bt_producao', 'bt_comissao', 'tabela_voucher', 'ver_t_custo', 'bloc_vl_comicao', 'bloquearINT', 'bt_ag_indica', 'bt_sol_boleto', 'bloc_bt_bol_fcw', 'bloc_bt_nfe_fcw', 'bloc_cont_obs', 'bt_financeiro', 'A1PF', 'A3PF-12', 'A3PF-24', 'A3PF', 'A3PF-HSM-1ano', 'A1PJ', 'A3PJ-12', 'A3PJ-24', 'A3PJ', 'A3PJ-HSM-1ano', 'bloc_nuvem', 'verComissaoParceiro', 'senha_has'],
        where: {
            A1PF: req.body.a1pf,
            PF12: req.body.a1pf,
            'A3PF-24': req.body.a3pf,
            A3PF: req.body.a3pf,
            'A3PF-HSM-1ano': 126.00,
            A1PJ: req.body.a1pj,
            'A3PJ-12': req.body.a1pj,
            'A3PJ-24': req.body.a3pj,
            A3PJ: req.body.a3pj,
            'A3PJ-HSM-1ano': 126.00
        }
    });
    var dados = req.body;



    dados.c_unidade = 1
    dados.email = req.body.email
    dados.nome = req.body.nome
    dados.polo = MATRIZ
    dados.bloco_de_notas = hidden
    dados.bt_producao = hidden
    dados.ver_t_custo = hidden
    dados.bloc_vl_comicao = hidden
    dados.bloquearINT = 0
    dados.bt_ag_indica = button
    dados.bt_sol_boleto = hidden
    dados.bloc_bt_nfe_fc = wbutton
    dados.bt_financeiro = hidden
    dados.bloc_nuvem = hidden
    dados.verComissaoParceiro = visible
    dados.senha = req.body.senha
    dados.senha_has = await bcrypt.hash(dados.senha, 8);

    await Agr.create(dados)
        .then(() => {
            console.log(agr)
            return res.json({
                error: false,
                message: 'Usuário cadastrado com sucesso!'
            });
        }).catch(err => {
            return res.status(400).json({
                error: true,
                message: 'Erro: Não foi possível cadastrar o usuário!'
            });
        });

});

router2.post('/cadastrar/agrv', async (req, res) => {

    const response = await SetPolo();
    const polo = await CalcPolo(response);

    const user = await Agrv.findOne({
        attributes: ['idagrv', 'nome', 'cpf', 'nascimento', 'rg', 'logradouro', 'numero', 'complemento', 'bairro', 'cep', 'municipio', 'uf', 'whatsapp', 'chavepix', 'tipopix', 'numeropolo', 'a1pj_12m', 'a3pj_36m', 'a1pf_12m', 'a3pf_36m'],
        where: {
            email: req.body.email,
            senha: req.body.senha,
            nome: req.body.nome,
            whatsapp: req.body.whatsapp,
            cpf: req.body.cpf,
            nascimento: req.body.nascimento,
            rg: req.body.rg,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cep: req.body.cep,
            municipio: req.body.municipio,
            uf: req.body.uf,
            chavepix: req.body.chavepix,
            tipopix: req.body.tipopix,
            a1pj_12m: req.body.A1PJ,
            a3pj_36m: req.body.A3PJ,
            a1pf_12m: req.body.A1PF,
            a3pf_36m: req.body.A3PF
        }
    });

    var dados = req.body;

    dados.numeropolo = polo + 1
    dados.email2 = req.body.senha
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


// ----------------------------------------------------------------------------
// login


router2.post('/login/agr', async (req, res) => {

    const agr = await Agr.findOne({
        attributes: ['idagr', 'usuario', 'senha', 'nome', 'c_unidade', 'polo', 'bloc_filial', 'bloco_de_notas', 'bt_producao', 'bt_comissao', 'tabela_voucher', 'ver_t_custo', 'bloc_vl_comicao', 'bloquearINT', 'bt_ag_indica', 'bt_sol_boleto', 'bloc_bt_bol_fcw', 'bloc_bt_nfe_fcw', 'bloc_cont_obs', 'bt_financeiro', 'A1PF', 'A3PF-12', 'A3PF-24', 'A3PF', 'A3PF-HSM-1ano', 'A1PJ', 'A3PJ-12', 'A3PJ-24', 'A3PJ', 'A3PJ-HSM-1ano', 'bloc_nuvem', 'verComissaoParceiro', 'senha_has'],
        where: {
            usuario: req.body.usuario,
        }
    });


    if (agr === null) { //verifica se o usuario existe
        return res.status(400).json({
            
            message: 'Erro: Usuário ou senha incorreto!'
        });
    };

    const match = await bcrypt.compare(req.body.senha, agr.senha_has);
    if (!match) {
        return res.status(400).end({
            message: 'Erro: Usuário ou senha incorreto!'
        });
    }
    var token = jwt.sign({ id: agr.idagr }, process.env.SECRET, {
        expiresIn: 14400 // expires in 4 hours
    });



    return res.status(200).json({
        user: {
            id: agr.idagr,
            nome: agr.nome,
            unidade: agr.c_unidade,
            polo: agr.polo,
            filial: agr.bloc_filial,
            notas: agr.bloco_de_notas,
            producao: agr.bt_producao,
            comissao: agr.bt_comissao,
            voucher: agr.tabela_voucher,
            vcusto: agr.ver_t_custo,
            vlcomicao: agr.bloc_vl_comicao,
            blokINT: agr.bloquearINT,
            agIndica: agr.bt_ag_indica,
            boleto: agr.bt_sol_boleto,
            bolFcw: agr.bloc_bt_bol_fcw,
            nfeFcw: agr.bloc_bt_nfe_fcw,
            contObs: agr.bloc_cont_obs,
            finaceiro: agr.bt_financeiro,
            A1PF: agr.A1PF,
            A3PF: agr.A3PF,
            A1PJ: agr.A1PJ,
            A3PJ: agr.A3PJ,
            nuvem: agr.bloc_nuvem,
            comiParc: agr.verComissaoParceiro
        },
        token: token
    });
});




module.exports = router2