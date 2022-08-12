import Sequelize from 'sequelize';
import DataBese from '../src/db.js';

const ClienteNfe = DataBese.define('clientesNFE', { //nome da tabela a ser conectada
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    CPF: Sequelize.INTEGER,
    CNPJ: Sequelize.INTEGER,
    Cliente: Sequelize.TEXT,
    RAZAO: Sequelize.TEXT,
    Vencimento: Sequelize.DATE,
    Valor: Sequelize.INTEGER,
    LINK: Sequelize.TEXT,
    TEL1: Sequelize.INTEGER,
    TEL2: Sequelize.INTEGER,
    STATUS: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,    


}, { freezeTableName: true }); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
//ClienteNfe.sync();

export default ClienteNfe;
