const { writeFile } = require('fs/promises')
const listzap = 'telList.json'
const filePath = "./file/"+listzap 

const FileWrite = (tel) => {
    writeFile(filePath, tel)
        .then(() => {
            console.log('criado com susseso')
        }).catch(error => {
            console.error('arqiovo não foi escrito')
        })
}

module.exports = FileWrite;