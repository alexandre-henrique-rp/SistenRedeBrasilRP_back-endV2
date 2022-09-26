import "dotenv/config";
export const ValorMin = async (venda) => {
    const media = process.env.VALOR_MEDIO;
    const result = venda < media ? 'Abaixo da média' : 'Média diária alcançada';
    return result
};
