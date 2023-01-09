import { DataTypes } from 'sequelize';
import  DataBese  from '../db';


export const Agrv: any = DataBese.define(
  'AGRV',
  {
    idagrv: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: DataTypes.STRING(100),
    cpf: DataTypes.STRING(20),
    nascimento: DataTypes.DATE,
    rg: DataTypes.STRING(20),
    linkcnh: DataTypes.TEXT,
    linkfotoperfil: DataTypes.TEXT,
    logradouro: DataTypes.TEXT,
    numero: DataTypes.TEXT,
    complemento: DataTypes.TEXT,
    cep: DataTypes.TEXT,
    municipio: DataTypes.TEXT,
    codmunicipio: DataTypes.TEXT,
    uf: DataTypes.TEXT,
    whatsapp: DataTypes.TEXT,
    celular: DataTypes.TEXT,
    fixo: DataTypes.TEXT,
    email: DataTypes.TEXT,
    email2: DataTypes.TEXT,
    permissaoacesso: DataTypes.TEXT,
    senha: DataTypes.TEXT,
    chavepix: DataTypes.TEXT,
    nomebanco: DataTypes.TEXT,
    numerobanco: DataTypes.FLOAT,
    numeroagencia: DataTypes.STRING(10),
    numeroconta: DataTypes.TEXT,
    tipocontabanco: DataTypes.TEXT,
    nomepolo: DataTypes.TEXT,
    numeropolo: DataTypes.INTEGER,
    linklogopolo: DataTypes.TEXT,
    municipiopolo: DataTypes.TEXT,
    ufpolo: DataTypes.TEXT,
    a1pj_12m: DataTypes.INTEGER,
    a3pj_36m: DataTypes.INTEGER,
    a1pf_12m: DataTypes.INTEGER,
    a3pf_36m: DataTypes.INTEGER,
    bairro: DataTypes.TEXT,
    tipopix: DataTypes.TEXT,
    painel_agrv: DataTypes.INTEGER,
  },
  { freezeTableName: true },
);

//criar a tabela
// User.sync();
