
export const tdPrice = async (lista) => {
  const uni = lista.filter((u) => u.unidade === "1");
  const unipice = uni.filter(s => s.id_fcw_soluti !== "")
  const total1 = await unipice
    .map((v) => (v.valorcd === "" ? parseInt("0") : parseInt(v.valorcd)))
    .reduce((acc, p) => acc + p);
  const reprice = lista.filter((u) => u.unidade !== "1");
  const total2 =
    reprice.length === 0
      ? 0
      : reprice.length === "0"
      ? 0
      : reprice.length === ""
      ? 0
      : reprice
          .map((v) => (v.custocd === "" ? parseInt("0") : parseInt(v.custocd)))
          .reduce((acc, p) => acc + p);
  const total = total1 + total2
  const result = total;
  return result;
};


