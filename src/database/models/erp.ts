import { DataTypes } from 'sequelize';
import { DataBese } from '../db';


export const Erp: any = DataBese.define(
  "erp",
  {
    //nome da tabela a ser conectada
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: DataTypes.TEXT,
    fantasia: DataTypes.TEXT,
    email: DataTypes.TEXT,
    end: DataTypes.TEXT,
    bairro: DataTypes.TEXT,
    numero: DataTypes.INTEGER,
    cidade: DataTypes.TEXT,
    pais: DataTypes.TEXT,
    Ie: DataTypes.TEXT,
    tel: DataTypes.TEXT,
    whatsapp: DataTypes.TEXT,
    a1pf: DataTypes.INTEGER,
    a3pf: DataTypes.INTEGER,
    a1pj: DataTypes.INTEGER,
    a3pj: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    regime: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpj: DataTypes.TEXT,
    authorization: DataTypes.TEXT,
    repasse:DataTypes.INTEGER,
    unidade:DataTypes.TEXT
  },
  { freezeTableName: true }
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
// ERP.sync();

