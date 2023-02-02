import { Request, Response } from 'express';
import { ConsltaClientsAgrv } from '../../../lib/agrv/consltaClientsAgrv';
import { RelatorioPricipal } from '../../../lib/agrv/relatorioAgrv';
import { RelatRevend } from '../../../lib/agrv/relatrevenda';
import { ConsltaTotalAgrv } from '../../../lib/agrv/totalvenda';

export const FatureAgrv = async (req: Request, res: Response) => {
  try {
    const agentRevenda = await RelatorioPricipal();
    const relatoRevenda = await ConsltaClientsAgrv(agentRevenda);
    const totalRevenda = await ConsltaTotalAgrv(relatoRevenda);
    const fature = await RelatRevend(relatoRevenda);
    const resposta = {
      Total: totalRevenda,
      data: fature
    }
    res.status(200).json(resposta);
  } catch (error) {
    res.status(400).send("Deu Ruim de vez");
  }
};