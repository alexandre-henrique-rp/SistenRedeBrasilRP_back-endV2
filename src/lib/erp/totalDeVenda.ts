export const TotalERP = async (info: any[]) => {
  const total = info.reduce((acc: any, t) => acc + t.totalvend, 0);
  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
