import { DataTypes } from 'sequelize';
import { DataBese } from '../db';

export const Agr:any = DataBese.define(
  'usuariosfcw',
  {
    //nome da tabela a ser conectada
    idagr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuario: DataTypes.TEXT,
    senha: DataTypes.TEXT,
    nome: DataTypes.TEXT,
    c_unidade: DataTypes.INTEGER,
    polo: DataTypes.TEXT,
    bloc_filial: DataTypes.TEXT,
    bloco_de_notas: DataTypes.TEXT,
    bt_producao: DataTypes.TEXT,
    bt_comissao: DataTypes.TEXT,
    tabela_voucher: DataTypes.TEXT,
    ver_t_custo: DataTypes.TEXT,
    bloc_vl_comicao: DataTypes.TEXT,
    bloquearINT: DataTypes.INTEGER,
    bt_ag_indica: DataTypes.TEXT,
    bt_sol_boleto: DataTypes.TEXT,
    bloc_bt_bol_fcw: DataTypes.TEXT,
    bloc_bt_nfe_fcw: DataTypes.TEXT,
    bloc_cont_obs: DataTypes.TEXT,
    bt_financeiro: DataTypes.TEXT,
    A1PF: DataTypes.TEXT,
    'A3PF-12': DataTypes.TEXT,
    'A3PF-24': DataTypes.TEXT,
    A3PF: DataTypes.TEXT,
    'A3PF-HSM-1ano': DataTypes.TEXT,
    A1PJ: DataTypes.TEXT,
    'A3PJ-12': DataTypes.TEXT,
    'A3PJ-24': DataTypes.TEXT,
    A3PJ: DataTypes.TEXT,
    'A3PJ-HSM-1ano': DataTypes.TEXT,
    bloc_nuvem: DataTypes.TEXT,
    verComissaoParceiro: DataTypes.TEXT,
    senha_has: DataTypes.TEXT,
  },
  { freezeTableName: true },
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
// Agr.sync();


