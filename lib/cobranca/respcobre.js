export const RespostaCobre = async (lista) => await Promise.all(lista.map(async iten => { 
  const status  = iten.smspg === "1" ? 'em abreto': 'em contato'
    return {
          nome: iten.nome,
          certificado: iten.tipocd,
          telefone: iten.telefone,
          valor: iten.valorcd,
      contabilidade: iten.contador,
          status: status
        }
}))