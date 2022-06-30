const { writeFile } = require('fs/promises')
const listzap = 'telList.txt'
const filePath = "./file/"+listzap 

const FileWrite = (tel) => {
    writeFile(filePath, tel)
        .then(() => {
            console.log('criado com susseso')
        }).catch(error => {
            console.error('arqiovo não foi escrito incorreto')
        })
}

module.exports = FileWrite;