import { DataTypes } from 'sequelize';
import  DataBese  from '../db';


export const Sorteio: any = DataBese.define(
  'sorteio',
  {
    //nome da tabela a ser conectada
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: DataTypes.TEXT,
    email: DataTypes.TEXT,
    telefone: DataTypes.TEXT,
    cep: DataTypes.TEXT,
    enderco: DataTypes.TEXT,
    complemento: DataTypes.TEXT,
    bairro: DataTypes.TEXT,
    numero: DataTypes.TEXT,
    uf: DataTypes.TEXT,
    cidade: DataTypes.TEXT,
    cpf: DataTypes.TEXT,
    empresa: DataTypes.TEXT,
    certificado: DataTypes.TEXT,
    lgpd: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { freezeTableName: true },
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
// Sorteio.sync();

