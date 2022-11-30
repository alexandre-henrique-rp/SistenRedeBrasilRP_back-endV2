export const ValVendDia = async (lista: any[]) => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = ano + '-' + mes + '-' + dia;
  const dateFilter = lista.filter((d) => d.dt_aprovacao === dataAtual);

  const ruslt =
    dateFilter.length === 0
      ? 0
      : dateFilter
          .map((v) => (v.valorcd === '' ? 0 : parseInt(v.valorcd)))
          .reduce((acc, p: number) => acc + p);

  return ruslt;
};
