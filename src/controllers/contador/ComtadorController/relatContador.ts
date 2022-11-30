import { Request, Response } from 'express';
import { PesqisaATV } from '../../../lib/contadores/contpesq';
import { PesqisaCont } from '../../../lib/contadores/PesquisaCont';
import { ResultRelat } from '../../../lib/contadores/resultcont';


export const ContRelat = async (req: Request, res: Response) => {
  try {
    const pesqicont = await PesqisaCont();
    const pequires = await PesqisaATV(pesqicont);
    const result = await ResultRelat(pequires);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send("Deu Ruim o relatorio dos contadores");
  }
};