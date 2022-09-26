export const Custo = async (lista) => {
  const custo = await lista
    .map((v) => (v.custocd === "" ? parseInt("0") : parseInt(v.custocd)))
    .reduce((acc, p) => acc + p);
  return custo;
};
