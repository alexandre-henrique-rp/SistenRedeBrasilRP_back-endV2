import { BlocAgrv } from "./AgrvController/bloqueado";
import { CreateAgrv } from "./AgrvController/create";
import { FatureAgrv } from "./AgrvController/faturamento";
import { AgrvAll } from "./AgrvController/listAll";
import { AgrvId } from "./AgrvController/listId";
import { MaxPolo } from "./AgrvController/maxPolo";
import { AgrvPgPolo } from "./AgrvController/pgPolo";
import { RelatClientAgrv } from "./AgrvController/relatClienteAgrv";
import { AgrvRelat } from "./AgrvController/relatorio";
import { AgrvUpdate } from "./AgrvController/update";


const AgrvController = {
  CreateAgrv,
  AgrvAll,
  AgrvId,
  AgrvUpdate,
  AgrvPgPolo,
  MaxPolo,
  AgrvRelat,
  RelatClientAgrv,
  FatureAgrv,
  BlocAgrv
};

export default AgrvController;