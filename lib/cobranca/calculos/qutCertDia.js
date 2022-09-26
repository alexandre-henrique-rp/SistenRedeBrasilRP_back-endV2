// quantiddade de certificado ao dia 
export const QtDiaEmssao = async (lista) => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const dataAtual = ano + "-" + mes + "-" + dia;
  const dateFilter = await lista.filter((d) => d.dt_aprovacao === dataAtual);
  return dateFilter;
};
