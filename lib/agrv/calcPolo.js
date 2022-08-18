

export const CalcPolo = async ( response ) => {
    
    const data = response;
    const maior = data.map((item) => item.numeropolo)
    const polo = Math.max(...maior)
    return polo
}

