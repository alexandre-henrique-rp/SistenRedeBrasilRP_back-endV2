import { DataTypes } from 'sequelize';
import { DataBese } from '../db';


export const ClienteNfe: any = DataBese.define(
  'clientesNFE',
  {
    //nome da tabela a ser conectada
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    CPF: DataTypes.INTEGER,
    CNPJ: DataTypes.INTEGER,
    Cliente: DataTypes.TEXT,
    RAZAO: DataTypes.TEXT,
    Vencimento: DataTypes.DATE,
    Valor: DataTypes.INTEGER,
    LINK: DataTypes.TEXT,
    TEL1: DataTypes.INTEGER,
    TEL2: DataTypes.INTEGER,
    STATUS: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  },
  { freezeTableName: true },
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
//ClienteNfe.sync();
