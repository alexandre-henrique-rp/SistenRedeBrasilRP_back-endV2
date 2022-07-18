

const Calc = async (response) => {
    const data = response;
    const maior = data.map((item) => item.numeropolo)
    const polo = Math.max(...maior)
    return polo
}

module.exports = Calc