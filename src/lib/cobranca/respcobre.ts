export const RespostaCobre = async (lista: any[]) =>
  await Promise.all(
    lista.map(async (iten) => {
      const status =
        iten.smspg === null
          ? 'em abreto'
          : iten.smspg === undefined
          ? 'em abreto'
          : iten.smspg === ''
          ? 'em abreto'
          : iten.smspg === 1
          ? 'em abreto'
          : iten.smspg === 2
          ? '1° contato'
          : iten.smspg === 3
          ? '2° contato'
          : iten.smspg === 4
          ? '3° contato'
          : 'Cliente não retornou';

      const d = new Date();
      const dia = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
      const atual: any = d.getFullYear() + '-' + d.getMonth() + 1 + '-' + dia;
      const d1: any = new Date(iten.dt_aprovacao);
      const d2: any = new Date(atual);
      const diffInMs = d2 - d1;
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      return {
        id: iten.id,
        nome: iten.nome,
        certificado: iten.tipocd,
        telefone: iten.telefone,
        valor: iten.valorcd,
        contabilidade: iten.contador,
        criado: iten.dt_aprovacao,
        Tcriacao: diffInDays,
        vecimento: iten.vectoboleto,
        status: status,
      };
    }),
  );
