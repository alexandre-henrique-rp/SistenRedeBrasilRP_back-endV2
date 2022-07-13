const Sequelize = require('sequelize');
const database = require('../src/db');

const Agr = database.define('usuariosfcw', { //nome da tabela a ser conectada
    "idagr": {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    "usuario": Sequelize.TEXT,
    "senha": Sequelize.TEXT,
    "nome": Sequelize.TEXT,
    "c_unidade": Sequelize.INTEGER,
    "polo": Sequelize.TEXT,
    "bloc_filial": Sequelize.TEXT,
    "bloco_de_notas": Sequelize.TEXT,
    "bt_producao": Sequelize.TEXT,
    "bt_comissao": Sequelize.TEXT,
    "tabela_voucher": Sequelize.TEXT,
    "ver_t_custo": Sequelize.TEXT,
    "bloc_vl_comicao": Sequelize.TEXT,
    "bloquearINT": Sequelize.INTEGER,
    "bt_ag_indica": Sequelize.TEXT,
    "bt_sol_boleto": Sequelize.TEXT,
    "bloc_bt_bol_fcw": Sequelize.TEXT,
    "bloc_bt_nfe_fcw": Sequelize.TEXT,
    "bloc_cont_obs": Sequelize.TEXT,
    "bt_financeiro": Sequelize.TEXT,
    "A1PF": Sequelize.TEXT,
    "A3PF-12": Sequelize.TEXT,
    "A3PF-24": Sequelize.TEXT,
    "A3PF": Sequelize.TEXT,
    "A3PF-HSM-1ano": Sequelize.TEXT,
    "A1PJ": Sequelize.TEXT,
    "A3PJ-12": Sequelize.TEXT,
    "A3PJ-24": Sequelize.TEXT,
    "A3PJ": Sequelize.TEXT,
    "A3PJ-HSM-1ano": Sequelize.TEXT,
    "bloc_nuvem": Sequelize.TEXT,
    "verComissaoParceiro": Sequelize.TEXT,
    "senha_has": Sequelize.TEXT,


}, { freezeTableName: true }); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
// Agr.sync();

module.exports = Agr;