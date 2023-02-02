import { Request, Response } from 'express';
import { AxioGet } from '../../../lib/axios_api';
import { QrcodeImg } from '../../../lib/cliente/Qrcodeimg';


export const GetQrcodeId = async (req: Request, res: Response) => {
  try {
    const Id = req.params.id
    const destino = `/cliente/get/t/${Id}`;
  const resp = await AxioGet(destino);
  
  if(resp.imgCode === '' || resp.imgCode === null){
    const qrcode = await QrcodeImg(Id)
    res.status(200).send(qrcode)
  }else {

  }
    
    
  } catch (err) {
    res.status(400).json(err);
  }
}