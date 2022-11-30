export const CalcPolo = async (response: any) => {
  const data = response;
  const maior = data.map((item: { numeropolo: any }) => item.numeropolo);
  const polo = Math.max(...maior);
  return polo;
};
