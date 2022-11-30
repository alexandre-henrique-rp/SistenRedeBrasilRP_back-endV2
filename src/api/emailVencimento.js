import nodemailer from "nodemailer";

export const EmailVenc = async (lista) =>
  Promise.all(
    lista.map(async (item) => {
      try {
        const nome = !item.nome ? item.titulo : item.nome;
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secureConnection: false,
          requireTLS: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
          }
        });
        setTimeout(async () => {
          transporter
            .sendMail({
              from: process.env.EMAIL_USER,
              to: [item.email,item.emailCont],
              // to: alexandreredebrasil@gmail.com,
              // cc: item.emailCont,
              subject: `${nome} precisamos conversar!`,

              html: `<!DOCTYPE html>
<html lang="pt" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no">
<title>vencimento</title>


<!--##custom-font-resource##-->
<!--[if gte mso 16]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style>
html,body,table,tbody,tr,td,div,p,ul,ol,li,h1,h2,h3,h4,h5,h6 {
margin: 0;
padding: 0;
}

body {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}

table {
border-spacing: 0;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt;
}

table td {
border-collapse: collapse;
}

h1,h2,h3,h4,h5,h6 {
font-family: Arial;
}

.ExternalClass {
width: 100%;
}

.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%;
}

/* Outermost container in Outlook.com */
.ReadMsgBody {
width: 100%;
}

img {
-ms-interpolation-mode: bicubic;
}

</style>

<style>
a[x-apple-data-detectors=true]{
color: inherit !important;
text-decoration: inherit !important;
}

u + #body a {
color: inherit;
text-decoration: inherit !important;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}

a, a:link, .no-detect-local a, .appleLinks a {
color: inherit !important;
text-decoration: inherit;
}

</style>

<style>

.width600 {
width: 600px;
max-width: 100%;
}
.width960 {
width: 960px;
max-width: 100%;
}
.width950 {
width: 950px;
max-width: 100%;
}

@media all and (max-width: 599px) {
.width600 {
width: 100% !important;
}
}
@media all and (max-width: 959px) {
.width960 {
width: 100% !important;
}
}
@media all and (max-width: 949px) {
.width950 {
width: 100% !important;
}
}

@media screen and (min-width: 600px) {
.hide-on-desktop {
display: none !important;
}
}

@media all and (max-width: 599px),
only screen and (max-device-width: 599px) {
.main-container {
width: 100% !important;
}

.col {
width: 100%;
}

.fluid-on-mobile {
width: 100% !important;
height: auto !important;
text-align:center;
}

.fluid-on-mobile img {
width: 100% !important;
}

.hide-on-mobile {
display:none !important;
width:0px !important;
height:0px !important;
overflow:hidden;
}
}

</style>


<!--[if gte mso 9]>
<style>

.col {
width: 100%;
}

.width600 {
width: 600px;
}
.width960 {
width: 960px;
}
.width950 {
width: 950px;
}

.width511 {
width: 511px;
height: auto;
}
.width440 {
width: 440px;
height: auto;
}
.width15 {
width: 15px;
height: auto;
}
.width262 {
width: 262px;
height: auto;
}

.hide-on-desktop {
display: none;
}

.hide-on-desktop table {
mso-hide: all;
}

.hide-on-desktop div {
mso-hide: all;
}

.nounderline {text-decoration: none; }

.mso-font-fix-arial { font-family: Arial, sans-serif; }
.mso-font-fix-comic_sans_ms { font-family: 'Comic Sans MS', sans-serif; }
.mso-font-fix-courier { font-family: Courier, monospace; }
.mso-font-fix-georgia { font-family: Georgia, serif; }
.mso-font-fix-segoe_ui { font-family: 'Segoe UI', sans-serif; }
.mso-font-fix-tahoma { font-family: Tahoma, sans-serif; }
.mso-font-fix-times_new_roman { font-family: 'Times New Roman', serif; }
.mso-font-fix-trebuchet_ms { font-family: 'Trebuchet MS', sans-serif; }
.mso-font-fix-verdana { font-family: Verdana, sans-serif; }

</style>
<![endif]-->

</head>
<body id="body" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="font-family:Arial, sans-serif; font-size:0px;margin:0;padding:0;background-color:#eaeaea;">
<span style="display:none;font-size:0px;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">email de vencimento </span>
<style>
@media screen and (min-width: 600px) {
.hide-on-desktop {
display: none;
}
}
@media all and (max-width: 599px) {
.hide-on-mobile {
display:none !important;
width:0px !important;
height:0px !important;
overflow:hidden;
}
.main-container {
width: 100% !important;
}
.col {
width: 100%;
}
.fluid-on-mobile {
width: 100% !important;
height: auto !important;
text-align:center;
}
.fluid-on-mobile img {
width: 100% !important;
}
}
</style>
<div style="background-color:#eaeaea;">
<table height="100%" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top" align="left">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#e2e2e2;">
<tr>
<td align="center" width="100%">
<!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table class="width600 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:77px;padding-bottom:25px;"><!--[if gte mso 9]><table width="511" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" style="max-width:100%;" class="fluid-on-mobile img-wrap">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/63695e74083b9f241fc1c28e/63695e74083b9f5504c1c290/1667850273280_path568.png" width="511" height="105" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width511" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#eb6b09;line-height:25px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;"><span class="mso-font-fix-arial">O Certificado Digital + Fácil</span></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#e2e2e2;">
<tr>
<td align="center" width="100%">
<!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table class="width600 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:25px;padding-right:10px;padding-bottom:25px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:32px;color:#131313;line-height:32px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 20px; color: #131313; font-weight: normal; line-height: 40px; mso-line-height: exactly; mso-text-raise: 10px; padding: 0; margin: 0;text-align: center;"><span class="mso-font-fix-arial"><strong>Olá ${nome}, tudo bem?!</strong></span></h1>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#131313;line-height:20px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">Estamos entrando em contato, para lhe informar que o seu Certificado digital</span></p>
<p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">Modelo: </span><span class="mso-font-fix-arial"><strong>${item.tipoCD}&nbsp;</strong></span><span class="mso-font-fix-arial"> -&nbsp; </span><span class="mso-font-fix-arial"><strong>${item.titulo}</strong></span><span class="mso-font-fix-arial">,</span></p>
<p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">documento: </span><span class="mso-font-fix-arial"><strong>${item.doc}</strong></span></p>
<p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">Expira </span><span class="mso-font-fix-arial"><strong>${item.dia1}</strong></span><span class="mso-font-fix-arial">&nbsp; -&nbsp; </span><span class="mso-font-fix-arial"><strong>${item.Date}</strong></span></p>
<p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">fc: </span><span class="mso-font-fix-arial"><strong>${item.id}</strong></span></p>
<p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">Não deixe para a última hora! Entre em contato agora</span></p>
<p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">pelo WhatsApp e renove o seu certificado!</span></p></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:45px;padding-right:20px;padding-bottom:65px;padding-left:20px;">
<!--[if !mso]><!-- -->
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
<span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Renove pelo WhatsApp</span></span>
</font>
</span>
</td>
</tr>
</table>
</span>
</a>
<!--<![endif]-->
<div style="display:none; mso-hide: none;">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;text-decoration:none;text-align:center;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Renove pelo WhatsApp</span></span>
</font>
</span>
</a>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-image:url('https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/895989_880251/editor_images/bffaaa86-cb5b-42f4-adfc-12df2165fcba.png');background-repeat:no-repeat;background-position:center top;background-size:auto;">
<tr>
<td align="center" width="100%">
<!--[if gte mso 9]><table width="960" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table class="width960 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:960px;">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:480px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:480px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:151px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #131313; font-weight: normal; line-height: 40px; mso-line-height: exactly; mso-text-raise: 7px; padding: 0; margin: 0;"><span class="mso-font-fix-arial">O que é um </span><span class="mso-font-fix-arial"><span style="color:#eb6b09;">Certificado</span></span><span class="mso-font-fix-arial"> Digital</span></h1>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:121px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#131313;line-height:25px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">O Certificado Digital é um documento eletrônico de identificação virtual, com validade jurídica e física. Sua aquisição /emissão permite resolver pela internet o que de outra forma necessitaria a ida presencial ao local desejado. Com isso a utilização do certificado digital possui segurança, autenticidade, confidencialidade e integridade às atividades realizadas por meio eletrônico.</span></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:480px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:122px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #131313; font-weight: normal; line-height: 40px; mso-line-height: exactly; mso-text-raise: 7px; padding: 0; margin: 0;"><span class="mso-font-fix-arial">Benefícios e </span><span class="mso-font-fix-arial"><span style="color:#eb6b09;">Vantagens</span></span></h1>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:60px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#131313;line-height:25px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">O Certificado Digital funciona como uma identidade digital através da criptografia e seus benefícios podem ser aproveitados por pessoas físicas ou jurídicas. Está disponível em diferentes formatos de armazenamento e aplicações, funcionando como a versão digital de inúmeros documentos como o e-CPF, e-CNPJ e NF-e</span></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:480px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:26px;padding-right:10px;padding-bottom:8px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 28px; color: #131313; font-weight: normal; line-height: 40px; mso-line-height: exactly; mso-text-raise: 6px; padding: 0; margin: 0;text-align: center;"><span class="mso-font-fix-arial">Não perca </span><span class="mso-font-fix-arial"><span style="color:#eb6b09;">tempo!</span></span></h1>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:15px;padding-right:20px;padding-bottom:23px;padding-left:20px;">
<!--[if !mso]><!-- -->
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
<span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Garanta o seu agora!</span></span>
</font>
</span>
</td>
</tr>
</table>
</span>
</a>
<!--<![endif]-->
<div style="display:none; mso-hide: none;">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;text-decoration:none;text-align:center;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Garanta o seu agora!</span></span>
</font>
</span>
</a>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#111111;background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3641/web_bg.png');background-repeat:no-repeat;background-position:center top;background-size:auto;">
<tr>
<td align="center" width="100%">
<!--[if gte mso 9]><table width="960" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table class="width960 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:960px;">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:480px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:77px;padding-right:10px;padding-bottom:20px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#eb6b09;line-height:25px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">Renovação online</span></p></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:20px;padding-right:10px;padding-bottom:20px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 20px; color: #ffffff; font-weight: normal; line-height: 40px; mso-line-height: exactly; mso-text-raise: 10px; padding: 0; margin: 0;"><span class="mso-font-fix-arial">Evite transtornos ao </span><span class="mso-font-fix-arial"><span style="color:#eb6b09;">Emitir</span></span><span class="mso-font-fix-arial"> suas notas fiscais</span></h1>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#ffffff;line-height:20px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">Não deixe o seu Certificado vencer! Emita suas NFs sem preocupação e garanta agilidade no processo!</span></p></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:30px;padding-right:20px;padding-bottom:30px;padding-left:20px;">
<!--[if !mso]><!-- -->
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
<span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Garanta o seu agora!</span></span>
</font>
</span>
</td>
</tr>
</table>
</span>
</a>
<!--<![endif]-->
<div style="display:none; mso-hide: none;">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;text-decoration:none;text-align:center;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Garanta o seu agora!</span></span>
</font>
</span>
</a>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:480px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="right" style="padding-top:77px;padding-bottom:77px;"><!--[if gte mso 9]><table width="440" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" style="max-width:100%;" class="fluid-on-mobile img-wrap">
<tr>
<td valign="top" align="right"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3641/designer.png" width="440" height="411" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width440" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#e2e2e2;background-image:url('https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/895989_880251/editor_images/4e66a02b-3de8-41c1-8032-768e99f6980b.jpg');background-repeat:no-repeat;background-position:right top;background-size:auto;">
<tr>
<td align="center" width="100%">
<!--[if gte mso 9]><table width="960" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table class="width960 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:960px;">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:610px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="63.541666666666664%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:80px;padding-bottom:25px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 20px; color: #131313; font-weight: normal; line-height: 40px; mso-line-height: exactly; mso-text-raise: 10px; padding: 0; margin: 0;text-align: center;"><span class="mso-font-fix-arial">Certificado Digital para Médicos, </span><span class="mso-font-fix-arial"><span style="color:#eb6b09;">Enfermeiro(a)</span></span><span class="mso-font-fix-arial"> e Advogados</span></h1>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#131313;line-height:20px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">No atendimento online ou presencial use o certificado digital para assinar prontuários, receitas, declarações, exames, atestados e outros documentos eletrônico, acessar plataformas e sistemas da saúde com total segurança e validade jurídica. O </span><span class="mso-font-fix-arial"><u>certificado Digital Pessoa Física</u></span> <span class="mso-font-fix-arial"><strong>(A1PF ou A3PF)</strong></span><span
class="mso-font-fix-arial"> é indicado para os médicos e profissionais da saúde em geral (</span><span class="mso-font-fix-arial"><strong>enfermeiros, farmacêuticos, psicólogos, veterinários, etc.)</strong></span><span class="mso-font-fix-arial">.&nbsp;</span></p></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:25px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#131313;line-height:20px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">No universo jurídico, com a implementação do processo eletrônico, o </span><span class="mso-font-fix-arial"><u>certificado Digital Pessoa Física</u></span>&nbsp;<span class="mso-font-fix-arial"><strong>(A3PF)</strong></span><span class="mso-font-fix-arial"> tornou-se indispensável para que o profissional consiga atuar de forma segura no ambiente on-line. Afinal, </span><span
class="mso-font-fix-arial"><strong>somente dessa forma é possível peticionar sem que haja a necessidade de um protocolo físico</strong></span><span class="mso-font-fix-arial">, por exemplo.</span></p>
<p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">Portanto, a ferramenta é o primeiro passo para que o advogado possa atuar em seus processos de forma eletrônica, sem correr o risco de violar informações.&nbsp;</span></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:350px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="36.458333333333336%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:30px;padding-right:20px;padding-bottom:30px;padding-left:20px;">
<!--[if !mso]><!-- -->
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
<span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Garanta o seu agora!</span></span>
</font>
</span>
</td>
</tr>
</table>
</span>
</a>
<!--<![endif]-->
<div style="display:none; mso-hide: none;">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#34af23" style="border-radius:18px;border-collapse:separate !important;background-color:#34af23;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:15px;padding-right:35px;padding-bottom:15px;padding-left:35px;">
<a href="https://wa.me/551633254134?text=Tenho%20interesse%20em%20renovar%20meu%20certificado" title="WhatsApp" target="_blank" style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;text-decoration:none;text-align:center;">
<span style="color:#ffffff !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;mso-line-height:exactly;line-height:25px;mso-text-raise:3px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-arial">Garanta o seu agora!</span></span>
</font>
</span>
</a>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#111111;">
<tr>
<td align="center" width="100%">
<!--[if gte mso 9]><table width="950" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table class="width950 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:950px;">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="padding-top:55px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:3px solid #ffff;">
<tr>
<td style="font-size:0px;line-height:0;mso-line-height-rule:exactly;">&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:316.6666666666667px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="33.333333333333336%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;color:#131313;line-height:20px;text-align:left;"><h2 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 18px; color: #ffffff; font-weight: normal; line-height: 34px; mso-line-height: exactly; mso-text-raise: 8px; padding: 0; margin: 0;"><span class="mso-font-fix-arial">Endereço:</span></h2>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#ffff;line-height:20px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">R. Américo Brasiliense, 284 - sala 135 - Centro, Ribeirão Preto - SP, 14015-050</span></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:316.6666666666667px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="33.333333333333336%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;color:#131313;line-height:25px;text-align:left;"></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:316.6666666666667px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="33.333333333333336%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;color:#131313;line-height:25px;text-align:left;"><h2 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 18px; color: #ffff; font-weight: normal; line-height: 34px; mso-line-height: exactly; mso-text-raise: 8px; padding: 0; margin: 0;"><span class="mso-font-fix-arial">Contato:</span></h2>
</div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:3px;padding-right:10px;padding-bottom:3px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#ffff;line-height:25px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">redebrasilrp@gmail.com</span></p></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:3px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#ffff;line-height:25px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">www.redebrasilrp.com.br</span></p></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:30.06329113924051px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="9.49367088607595%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="right" style="padding-right:6px;"><!--[if gte mso 9]><table width="15" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" style="max-width:100%;" class="img-wrap">
<tr>
<td valign="top" align="right" style="padding-top:7px;"><img src="https://images.chamaileon.io/63695e74083b9f241fc1c28e/63695e74083b9f5504c1c290/1667857611276_whatsappicom.png" width="15" height="15" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width15" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:286.6033755274262px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="90.50632911392405%" class="col" align="left">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:4px;padding-right:10px;padding-bottom:5px;padding-left:4px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:13px;color:#ffffff;line-height:25px;text-align:left;"><p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial">(16) 3320 - 4134</span></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:15px;padding-bottom:20px;"><!--[if gte mso 9]><table width="262" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" style="max-width:100%;" class="img-wrap">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/63695e74083b9f241fc1c28e/63695e74083b9f5504c1c290/1667857880254_path1479.png" width="262" height="54" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width262" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</body>
</html>`
            })
            .then((info) => {
              return {
                id: item.id,
                tel: item.tel,
                nome: item.nome,
                data: info
              };
            })
            .catch((error) => {
              console.error("Email incorreto");
              return {
                id: item.id,
                email: item.email,
                nome: item.nome,
                msg: "Email incorreto",
                data: error
              };
            });
        }, 1500);
      } catch (error) {
        console.log("dados não encontrado");
      }
    })
  );
