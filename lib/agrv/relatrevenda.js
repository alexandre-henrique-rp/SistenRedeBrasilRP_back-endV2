const RelatRevend = async (info) => await Promise.all(info.map(async iten => {

    const idagrv = iten.id;
    const nome = iten.nome;
    const polo = iten.polo;
    const data = iten.data;
    const status = iten.status
    const tclient = data.length;
    const painel = iten.painel;
    const boletoInt = data.reduce((acc, t) => acc + t.comissaoparceiro, 0);
    const total = boletoInt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const obj = { idagrv: idagrv, nome: nome, polo: polo, totalvend: total, totalclient: tclient, status: status, painel: painel }
    
    if (!obj) {
        throw new Error('Deu ruim 3')
    }

    return obj
}))

export default RelatRevend