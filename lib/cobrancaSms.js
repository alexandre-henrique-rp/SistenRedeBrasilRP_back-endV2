import 'dotenv/config'


var dataI = new Date();
var dia = dataI.getDate();
var mes = dataI.getMonth() + 1;
var ano = dataI.getFullYear();
var mesA = mes < "10" ? "0" + mes : mes;
var diaA = dia < "10" ? "0" + dia : dia
var dataAtual = diaA + "-" + mesA + "-" + ano;

const inicio = { "id": 000, "name": "Relatorio de erro(" + dataAtual + ")" };


const CobrancaSms = async (lista) => {

    var nuber = lista.tel

    var myHeaders = new Headers();
    myHeaders.append("access-token", process.env.ZAP_TOKEN);
    myHeaders.append("Content-Type", process.env.ZAP_TYPE);


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            "number": nuber,
            "forceSend": true,
            "verifyContact": true,
            "linkUrl": "https://redebrasilrp.com.br/_assets/img/cnh_foto.jpeg",
            "extension": ".jpg",
            "base64": "",
            "fileName": "cnh_foto",
            "caption": "*2) Foto da CNH*\n \n a sua CNH é muito importante, para que possamos comparar se o seu dados estão corretos\n \n*Lembrando, mande apenas uma foto, com o documento aberto*.",
        }),
        redirect: 'follow'
    };

    fetch(process.env.ZAP_URL_SMSM, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(() => {
            setTimeout(() => {
                nanvigate('/03');
            }, 3000);
        })
        .catch(error => console.log('error', error));
    
   
}

module.exports = CobrancaSms