import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';


export const ErpPgPolo = async (req: Request, res: Response) => {
  const dados = req.body;

  await Fcweb.update(dados, {
    attributes: [
      "id",
      "nome",
      "razaosocial",
      "cnpj",
      "cpf",
      "unidade",
      "estatos_pgto",
      "andamento",
      "telefone",
      "scp",
      "custoCdpar",
      "tipocd",
      "valorcd",
      "custocd",
      "contador",
      "comissaoparceiro",
      "formapgto",
      "id_fcw_soluti",
    ],
    where: {
      unidade: req.params.polo,
      estatos_pgto: "Pago",
      andamento: {
        [Op.or]: ["EMITIDO", "APROVADO"]
      },
      id_fcw_soluti: {
        [Op.ne]: [''],
      },
    }
  })
    .then(() => {
      return res.json({
        message: "Revendedor pago com sucesso!"
      });
    })
    .catch(() => {
      return res.status(400).json({
        message: "Erro: Não foi possível pagar o Revendedor!"
      });
    });
};
