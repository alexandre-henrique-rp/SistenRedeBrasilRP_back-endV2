export const TdPriceLiquido = async (bruto: number,custo: number) => {
    const result = bruto - custo;
    return result;
};
