export const list2 = async (info: any[]) => {
  const data = info.filter((item) => item.TEL2);
  if (!data) {
    throw new Error('Deu ruim');
  }
  return data;
};