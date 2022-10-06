import Sequelize from "sequelize";
import database from "../src/db.js";

const Sorteio = database.define(
  "sorteio",
  {
    //nome da tabela a ser conectada
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: Sequelize.TEXT,
    email: Sequelize.TEXT,
    telefone: Sequelize.TEXT,
    cep: Sequelize.TEXT,
    enderco: Sequelize.TEXT,
    complemento: Sequelize.TEXT,
    bairro: Sequelize.TEXT,
    numero: Sequelize.TEXT,
    uf: Sequelize.TEXT,
    cidade: Sequelize.TEXT,
    cpf: Sequelize.TEXT,
    empresa: Sequelize.TEXT,
    certificado: Sequelize.TEXT,
    lgpd: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true }
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
// Sorteio.sync();

export default Sorteio;
