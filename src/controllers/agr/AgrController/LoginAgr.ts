import 'dotenv/config'
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Agr } from '../../../database/models/agr';

const LoginAgr = async (req: Request,res: Response) => {
  const agr = await Agr.findOne({
    where: {
      usuario: req.body.usuario,
    },
  });

  if (agr === null) {
    //verifica se o usuario existe
    return res.status(400).send({
      message: 'Erro: Usuário ou senha incorreto!',
    });
  }

  const match = await bcrypt.compare(req.body.senha, agr.senha_has);
  if (!match) {
    return res.status(400).send({
      message: 'Erro: Usuário ou senha incorreto!',
    });
  }
  const token = jwt.sign({ id: agr.idagr }, process.env.SECRET, {
    expiresIn: 14400, // expires in 4 hours
  });

  return res.status(200).json({
    user: {
      id: agr.idagr,
      nome: agr.nome,
      email: agr.email,
    },
    token: token,
    authorization: true,
  });
};

export default LoginAgr
