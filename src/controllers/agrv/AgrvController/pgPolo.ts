import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../database/models/fcweb';


export const AgrvPgPolo = async (req: Request, res: Response) => {
  var dados = req.body;

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
      "comissaoparceiro",
      "formapgto"
    ],
    where: {
      unidade: req.params.polo,
      estatos_pgto: "Pago",
      andamento: {
        [Op.or]: ["EMITIDO", "APROVADO"]
      }
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
