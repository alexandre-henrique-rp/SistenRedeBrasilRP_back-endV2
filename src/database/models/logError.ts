import { DataTypes } from 'sequelize';
import  DataBese  from '../db';


export const LogErro: any = DataBese.define(
  'log_error',
  {
    //nome da tabela a ser conectada
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ref: DataTypes.STRING(100),
    log: DataTypes.STRING(100),
    reg: DataTypes.DATE,
    dia: DataTypes.STRING(100),
    titulo: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    doc: DataTypes.STRING(100),
    createdAt: DataTypes.DATE,
  },
  { freezeTableName: true },
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
//LogErro.sync();
