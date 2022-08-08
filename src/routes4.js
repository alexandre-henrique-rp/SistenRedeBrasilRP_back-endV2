import 'dotenv/config'
import { Router } from 'express';
import { eAdmin } from '../middlewares/auth.js';


import Agr from '../model/agr.js';
const router4 = Router()


// session clinte

// ---------------------------------------------------------------------------

router4.put('/update/agrv/cliente/:id', async (req, res) => {

    var dados = req.body;
    var identificador = req.body.identificador
    await BloqueioAgrev(identificador)

    const agrv = await Agrv.update(dados, {
        attributes: [
            'idagrv', 'nome', 'cpf', 'nascimento', 'rg', 'logradouro', 'numero', 'complemento', 'bairro', 'cep', 'municipio', 'uf', 'whatsapp', 'chavepix', 'tipopix', 'numeropolo', 'a1pj_12m', 'a3pj_36m', 'a1pf_12m', 'a3pf_36m', 'nomepolo', 'ufpolo', 'permissaoacesso'
        ],
        where: {
            idagrv: req.params.id
        }
    })
        .then((agrv) => {
            return res.json({
                message: 'Revendedor atualizado com sucesso!'
            });
        })
        .catch((err) => {
            return res.status(400).json({
                message: 'Erro: Não foi possível atualizar o Revendedor!'
            });
        })
});

export default router4;