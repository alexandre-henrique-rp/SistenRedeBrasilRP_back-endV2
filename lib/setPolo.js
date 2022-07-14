const axios = require('axios')


const SetPolo = async() => {
    
    const clienteHttp = axios.create({
        baseURL: "http://localhost:3050/"
    });
    const resp = clienteHttp.get("list/user/max/polo").then(function (response) {
        // console.log(response);
        const data = response.data
        return data
    })

    const polo = resp


    return polo
}

module.exports = SetPolo