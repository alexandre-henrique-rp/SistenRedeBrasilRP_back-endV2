export const ClienteBoleto = async (lista: any) => {
  // console.log(lista)
  const ListaCliente = lista.map(
    (item: {
      id: number;
      referencia: any;
      responsavel: any;
      andamento: any;
      nome: any;
      vectoboleto: any;
      razaosocial: any;
      contador: any;
      tipocd: any;
      valorcd: any;
      estatos_pgto: any;
      formapgto: any;
      telefone: any;
      email: any;
      dt_aprovacao: any;
    }) => {
      const hoje = new Date();
      const dia = hoje.getDate().toString().padStart(2, '0');
      const mes = String(hoje.getMonth() + 1).padStart(2, '0');
      const ano = hoje.getFullYear();
      const dataAtual = `${ano}-${mes}-${dia}`;
      

      const data = {
        id: item.id,
        referencia: item.referencia,
        responsavel: item.responsavel,
        andamento: item.andamento,
        nome: item.nome,
        vectoboleto: item.vectoboleto,
        razaosocial: item.razaosocial,
        contador: item.contador,
        tipocd: item.tipocd,
        valorcd: item.valorcd,
        estatos_pgto: item.estatos_pgto,
        formapgto: item.formapgto,
        telefone: item.telefone,
        email: item.email,
        dt_aprovacao: item.dt_aprovacao,
        status_Boleto: item.formapgto !== 'BOLETO-BRA' ? '' : item.vectoboleto <= dataAtual ? 'Boleto em aberto sem expiração' : 'Boleto Vencido',
      };
      return data;
    },
  );

  return ListaCliente;
};
