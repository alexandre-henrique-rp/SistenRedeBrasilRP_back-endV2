import { Request, Response } from 'express';
import { PesqisaErp } from '../../../lib/contadores/erpPesqList';
import { ConsltaClientsErp } from '../../../lib/erp/consltaClientsErp';
import { DataErp } from '../../../lib/erp/dataErp';
import { RelatERP } from '../../../lib/erp/relatrevenda';
import { TotalERP } from '../../../lib/erp/totalDeVenda';

export const ListErp = async (req: Request, res: Response) => {
  try {
    const erp = await PesqisaErp();
    const pesqErp = await ConsltaClientsErp(erp);
    const resposta = await RelatERP(pesqErp);
    const data = await DataErp(pesqErp);
    const total = await TotalERP(resposta);
    res.status(200).json({ total: total, data: data });
  } catch (error) {
    res.status(400).send('erro na pesquisa');
  }
};
