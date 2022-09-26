import 'dotenv/config'
import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';
import { Router } from 'express';
import { eAdmin } from '../middlewares/auth.js';


import Agr from '../model/agr.js';
const router3 = Router()


// session AGR

// ---------------------------------------------------------------------------

router3.post('/login/agr', async (req, res) => {

    const agr = await Agr.findOne({
        attributes: ['idagr', 'usuario', 'senha', 'nome', 'c_unidade', 'polo', 'bloc_filial', 'bloco_de_notas', 'bt_producao', 'bt_comissao', 'tabela_voucher', 'ver_t_custo', 'bloc_vl_comicao', 'bloquearINT', 'bt_ag_indica', 'bt_sol_boleto', 'bloc_bt_bol_fcw', 'bloc_bt_nfe_fcw', 'bloc_cont_obs', 'bt_financeiro', 'A1PF', 'A3PF-12', 'A3PF-24', 'A3PF', 'A3PF-HSM-1ano', 'A1PJ', 'A3PJ-12', 'A3PJ-24', 'A3PJ', 'A3PJ-HSM-1ano', 'bloc_nuvem', 'verComissaoParceiro', 'senha_has'],
        where: {
            usuario: req.body.usuario,
        }
    });

    if (agr === null) { //verifica se o usuario existe
        return res.status(400).send({
            message: 'Erro: Usuário ou senha incorreto!'
        });
    };

    const match = await bcrypt.compare(req.body.senha, agr.senha_has);
    if (!match) {
        return res.status(400).send({
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

router3.post('/cadastrar/agr', async (req, res) => {

    const agr = await Agr.findOne({
        attributes: ['idagr', 'usuario', 'senha', 'nome', 'c_unidade', 'polo', 'bloc_filial', 'bloco_de_notas', 'bt_producao', 'bt_comissao', 'tabela_voucher', 'ver_t_custo', 'bloc_vl_comicao', 'bloquearINT', 'bt_ag_indica', 'bt_sol_boleto', 'bloc_bt_bol_fcw', 'bloc_bt_nfe_fcw', 'bloc_cont_obs', 'bt_financeiro', 'A1PF', 'A3PF-12', 'A3PF-24', 'A3PF', 'A3PF-HSM-1ano', 'A1PJ', 'A3PJ-12', 'A3PJ-24', 'A3PJ', 'A3PJ-HSM-1ano', 'bloc_nuvem', 'verComissaoParceiro', 'senha_has']
    })

    var dados = req.body;

    dados.polo = 'MATRIZ'
    dados.c_unidade = 1
    dados.usuario = req.body.usuarrio
    dados.nome = req.body.nome
    dados.email = req.body.email
    dados.A1PF = req.body.a1pf
    dados.A3PF = req.body.a3pf
    dados.A1PJ = req.body.a1pj
    dados.A3PJ = req.body.a3pj
    dados.bloco_de_notas = 'hidden'
    dados.bt_producao = 'hidden'
    dados.ver_t_custo = 'hidden'
    dados.bloc_vl_comicao = 'hidden'
    dados.bloquearINT = 0
    dados.bt_ag_indica = 'button'
    dados.bt_sol_boleto = 'hidden'
    dados.bloc_bt_nfe_fcw = 'button'
    dados.bt_financeiro = 'hidden'
    dados.bloc_nuvem = 'hidden'
    dados.verComissaoParceiro = 'visible'
    dados.senha = req.body.senha;
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

export default router3;