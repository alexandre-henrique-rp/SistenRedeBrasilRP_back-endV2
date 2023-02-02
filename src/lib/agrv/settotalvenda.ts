export const SetTotalVenda = async (info: any) =>
  await Promise.all(
    info.map(async (iten: { data: any; }) => {
      const data = iten.data;

      const boletoInt = data.reduce(
        (acc: any, t: { comissaoparceiro: any }) => acc + t.comissaoparceiro,
        0,
      );
      return boletoInt;
    }),
  );
