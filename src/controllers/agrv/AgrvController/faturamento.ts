import { Request, Response } from 'express';
import { ConsltaClientsAgrv } from '../../../lib/agrv/consltaClientsAgrv';
import { RelatorioPricipal } from '../../../lib/agrv/relatorioAgrv';
import { RelatRevend } from '../../../lib/agrv/relatrevenda';

export const FatureAgrv = async (req: Request, res: Response) => {
  try {
    const agentRevenda = await RelatorioPricipal();
    const relatoRevenda = await ConsltaClientsAgrv(agentRevenda);
    const fature = await RelatRevend(relatoRevenda);
    res.status(200).json(fature);
  } catch (error) {
    res.status(400).send("Deu Ruim de vez");
  }
};