import { Create } from "./ClieneteController/cerate";
import { Get } from "./ClieneteController/get";
import { GetDoc } from "./ClieneteController/getDoc";
import { GetId } from "./ClieneteController/getId";
import { GetIdT } from "./ClieneteController/getIdT";
import { UpdateCliente } from "./ClieneteController/update";


const ClienteController = {
    Get,
    Create,
    GetId,
    GetIdT,
    GetDoc,
    UpdateCliente
  };
  
  export default ClienteController;