
const valor= process.env.VALOR_MEDIO
export const ValorMin = async (venda: number) => {
    const media = parseInt(valor);
    const result = venda < media ? 'Abaixo da média' : 'Média diária alcançada';
    return result
};
