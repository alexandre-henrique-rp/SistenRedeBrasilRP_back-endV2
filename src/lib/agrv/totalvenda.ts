import { SetTotalVenda } from './settotalvenda';

export const ConsltaTotalAgrv = async (info: any) => {
  const valor = await SetTotalVenda(info);
  const valotTotal = valor.reduce(
    (acc: any, valor: number) => acc + valor,
    0,
  );

  return valotTotal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
