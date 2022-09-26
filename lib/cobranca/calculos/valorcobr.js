export const ValorCobr = async (lista) => {
  const total =
    lista.length === 0
      ? 0
      : lista.length === "0"
      ? 0
      : lista.length === ""
      ? 0
      : lista
          .map((v) => (v.valorcd === "" ? parseInt("0") : parseInt(v.valorcd)))
          .reduce((acc, p) => acc + p);
  return total;
};
