const { writeFile } = require('fs/promises')
const listzap = 'errorSms.json'
const filePath = "./file/" + listzap

const inicio = ''

const writeSms = () => {
    writeFile(filePath, inicio)
        .then(() => {
            console.log('criado com susseso')
        }).catch(error => {
            console.error('arqiovo não foi escrito')
        })
}

module.exports = writeSms;