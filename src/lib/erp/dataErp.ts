export const DataErp = async (info: any[]) =>
await Promise.all(
  info.map(async (iten) => {
    console.log(iten)
    const idagrv = iten.id;
    const nome = iten.nome;
    const data = iten.data;
    const polo = iten.polo
    const status = iten.status;
    const tclient = data.length;
    const boletoInt = data.reduce(
      (acc: any, t: { comissaoparceiro: any }) => acc + t.comissaoparceiro,
      0,
    );
    const total = boletoInt.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    const obj: any = {
      idagrv: idagrv,
      nome: nome,
      polo: polo,
      totalvend: total,
      totalclient: tclient,
      status: status,
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

