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
      return {
        id: iten.id,
        nome: iten.nome,
        certificado: iten.tipocd,
        telefone: iten.telefone,
        valor: iten.valorcd,
        contabilidade: iten.contador,
        status: status,
      };
    }),
  );
