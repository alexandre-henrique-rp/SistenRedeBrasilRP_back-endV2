import { DataTypes } from 'sequelize';
import  DataBese  from '../db';


export const Contador = DataBese.define(
  'parceiro',
  {
    //nome da tabela a ser conectada
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    usuario: DataTypes.TEXT,
    senha: DataTypes.TEXT,
    mensagem: DataTypes.TEXT,
    unidade: DataTypes.TEXT,
    nome: DataTypes.TEXT,
    fone: DataTypes.TEXT,
    email: DataTypes.TEXT,
    observacao: DataTypes.TEXT,
    endereco: DataTypes.TEXT,
    'A1PJ-12': DataTypes.TEXT,
    'A3PJ-12': DataTypes.TEXT,
    'A3PJ-24': DataTypes.TEXT,
    'A3PJ-36': DataTypes.TEXT,
    'A1PF-12': DataTypes.TEXT,
    'A3PF-12': DataTypes.TEXT,
    'A3PF-24': DataTypes.TEXT,
    'A3PF-36': DataTypes.TEXT,
    ocultar_valor_volcher: DataTypes.TEXT,
    tipo_comissao: DataTypes.TEXT,
    whatsapp: DataTypes.STRING(100),
    createdAt: DataTypes.DATE,
  },
  { freezeTableName: true },
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
// Contador.sync();
