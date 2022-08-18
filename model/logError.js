import Sequelize from 'sequelize';
import DataBese from '../src/db.js';

export const LogErro = DataBese.define( 'log_error', { //nome da tabela a ser conectada
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ref: Sequelize.STRING( 100 ),
    log: Sequelize.STRING( 100 ),
    reg: Sequelize.DATE,
    dia: Sequelize.STRING( 100 ),
    titulo: Sequelize.STRING( 100 ),
    email: Sequelize.STRING( 100 ),
    doc: Sequelize.STRING( 100 ),
    createdAt: Sequelize.DATE,


}, { freezeTableName: true } ); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
//LogErro.sync();

