export const ResultRelat = async (info) => await Promise.all(info.map(async iten => {

    const contabilidade = iten.nome;
    const data = iten.data;
    const count = Array.isArray(data) ? data.filter(item => item.contador).length : 0;
    const countA1pf = Array.isArray(data) ? data.filter(item => item.tipocd === 'A1PF').length : 0;
    const countA3pf = Array.isArray(data) ? data.filter(item => item.tipocd === 'A3PF').length : 0;
    const countA1pj = Array.isArray(data) ? data.filter(item => item.tipocd === 'A1PJ').length : 0;
    const countA3pj = Array.isArray(data) ? data.filter(item => item.tipocd === 'A3PJ').length : 0;

    const obj = { cont: contabilidade, idex: count, A1PF: countA1pf, A3PF: countA3pf, A1PJ: countA1pj, A3PJ: countA3pj };
    if (!obj) {
        throw new Error('Deu ruim contador 3')
    }
    return obj;
}))