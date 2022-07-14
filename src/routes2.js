require('dotenv').config()
const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const sequelize = require('sequelize')


const router2 = Router()

const Agr = require('../model/agr')
const Agrv = require('../model/agrv')
const SetPolo = require('../lib/setPolo')


// ---------------------------------------------------------------------------

router2.get('/test', async (req, res) => {

    const response = await SetPolo();

    // return res.status(200).json({
    //     message: 'Agr cadastrado com sucesso!',
    //     hash: response.data
    // });
    console.log(response)
    res.json(response)
    
});
router2.get('/list/user/max/polo', async (req, res) => {

    const agrv = await Agrv.findAll({
        attributes: ['numeropolo'],
    })


    res.json(agrv)

});
router2.post('/cadastrar/agr', async (req, res) => {
    //$2a$08$dNS/DOXvNqOvACe5l1ZCuOyMeIN9BvURm.TEmzjoafdeBIxACCb0i
    const password = await bcrypt.hash('123456', 8);

    console.log(password);

    return res.status(200).json({
        message: 'Agr cadastrado com sucesso!',
        hash: password
    });
});

router2.post('/cadastrar/agrv', async (req, res) => {

    const user = Agrv.findOne({
        attributes: ['idagrv', 'nome', 'email', 'email2', 'senha', 'numeropolo'],
        where: {
            email: req.body.email,
            senha: req.body.senha,
            email2: req.body.senha
        }
    });
    var dados = req.body;

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
        return res.status(400).json({
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
            finaceiro: gr.bt_financeiro,
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