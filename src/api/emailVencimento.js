import nodemailer from "nodemailer";

export const EmailVenc = async (lista) => {
  try {
    const tableRows = lista.map((item) => {
      return `
        <tr>
          <td>${item.id}</td>
          <td>${item.titulo}</td>
          <td>${item.doc}</td>
          <td>${item.tipoCD}</td>
          <td>${item.dia1}</td>
          <td>${item.venc}</td>
          <td>${item.telefone}</td>
          <td>${item.Vencimento}</td>
          <td>${item.Date}</td>
          <td>${item.email}</td>
        </tr>`;
    });

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const emailContent = `
      <!DOCTYPE html>
      <html lang="pt-Br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Vencimento</title>
        <style>
          * {
            margin: 0;
            padding: 0;
          }
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          tr:nth-child(even) {
            background-color: #dddddd;
          }
        </style>
      </head>
      <body>
        <div>Lista de vencimento ${new Date().toLocaleDateString()}</div>
        <div>
          <table>
            <tr>
              <th>id</th>
              <th>titulo</th>
              <th>doc</th>
              <th>tipoCD</th>
              <th>dia1</th>
              <th>venc</th>
              <th>telefone</th>
              <th>Vencimento</th>
              <th>Date</th>
              <th>email</th>
            </tr>
            ${tableRows.join("")}
          </table>
        </div>
      </body>
      </html>
    `;

    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: 'redebrasilrp@gmail.com',
      subject: `Lista de vencimento do dia ${new Date().toLocaleDateString()}`,
      html: emailContent,
    };

    const emailResult = await transporter.sendMail(emailOptions); // Adicione "await" aqui

    console.log(emailResult);
    return emailResult;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
};
