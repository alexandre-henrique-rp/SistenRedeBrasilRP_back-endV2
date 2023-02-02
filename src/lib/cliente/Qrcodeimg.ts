import { AxioGet, AxioPut } from '../axios_api';
import fs from 'fs';
import { createCanvas, Image } from 'canvas';
import path from 'path';

export const QrcodeImg = async (id: any) => {
  const destino = `/cliente/get/t/${id}`;
  const resp = await AxioGet(destino);
  const link = resp.qrcodeLink;

  const googleChartAPI =
    'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=H&chl=' +
    encodeURIComponent(link);

  const Gimage = googleChartAPI;

  const width = 450
  const height = 450

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#1c1c1c1c1'
  

  const image = new Image();
  image.src = Gimage;

  await new Promise<void>((resolve) => {
    image.onload = () => {
      resolve();
    };
  });
  ctx.drawImage(image, (width / 2) - (image.width / 2), (height / 2) - (image.height / 2));
  ctx.drawImage(image, 0, 0, width, height);


  const date = new Date();
  const fileName = `${date.toISOString()}.png`;
  const filePath = 'src/lib/cliente';
  const fullFilePath = `${filePath}/${fileName}`;
  console.log(filePath);
  console.log(fullFilePath);
  const buffer = canvas.toBuffer();
  console.log(buffer);
  // fs.writeFileSync(fullFilePath, buffer);

  const data: any = { buffer };
  return data;

  const targetUrl = '';

  const response = await fetch(targetUrl, {
    method: 'PUT',
    body: buffer,
    headers: {
      'Content-Type': 'image/png',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to send image to ${targetUrl}: ${response.statusText}`,
    );
  }
};
