import { ContCreate } from "./ComtadorController/create";
import { ContDelet } from "./ComtadorController/delete";
import { ErpList } from "./ComtadorController/erpList";
import { ContListClient } from "./ComtadorController/listClienteCont";
import { ContList } from "./ComtadorController/listContador";
import { ContRelat } from "./ComtadorController/relatContador";
import { ContSearch } from "./ComtadorController/searchCont";
import { ContUpdate } from "./ComtadorController/update";


const ContadorController = {
  ContRelat,
  ContList,
  ContListClient,
  ContCreate,
  ContUpdate,
  ContDelet,
  ContSearch,
  ErpList
};

export default ContadorController;