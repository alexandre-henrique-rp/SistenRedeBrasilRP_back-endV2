const { writeFile } = require('fs/promises')
const fs = require('fs')
const listzap = 'errorEmail.json'
const filePath = "./file/" + listzap

var dataI = new Date();
var dia = dataI.getDate();
var mes = dataI.getMonth() + 1;
var ano = dataI.getFullYear();
var mesA = mes < "10" ? "0" + mes : mes;
var diaA = dia < "10" ? "0" + dia : dia
var dataAtual = ano + "-" + mesA + "-" + diaA;

const inicio = JSON.stringify('[{ "id": 000, "name": "Relatorio de erro(' + dataAtual +')"}]', null, 2)

const writeEmail = () => {
    // writeFile(filePath, inicio)
    //     .then(() => {
    //         console.log('criado com susseso')
    //     }).catch(error => {
    //         console.error('arqiovo não foi escrito')
    //     })


    fs.writeFile(filePath, inicio, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('successfully create new file  /file/errorEmail.json')
    })
}

module.exports = writeEmail;