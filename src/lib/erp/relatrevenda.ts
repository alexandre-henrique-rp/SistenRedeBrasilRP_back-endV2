export const RelatERP = async (info: any[]) =>
  await Promise.all(
    info.map(async (iten) => {
      const id = iten.id;
      const nome = iten.nome;
      const data = iten.data;
      const status = iten.status;
      const tclient = data.length;
      const boletoInt = data.reduce(
        (acc: any, t: { comissaoparceiro: any }) => acc + t.comissaoparceiro,
        0,
      );
      const total = boletoInt;
      const obj: any = {
        id: id,
        nome: nome,
        totalvend: total,
        totalclient: tclient,
        situacao: status,
      };

      if (!obj) {
        const data: any = {
          status: 404,
          msg: 'Não existe relatorio',
        };
        throw new Error(data);
      }
      return obj;
    }),
  );
