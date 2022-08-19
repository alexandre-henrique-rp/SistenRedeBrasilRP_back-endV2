import { AxioGet } from "../axios_api.js";

export const GetVencimento = async () => {
  const url30 = "cliente-30";
  const getVence30 = await AxioGet(url30);
  const List30 = await Promise.all(
    getVence30.map(async iten => {
      const id = iten.id;
      const titulo = iten.titulo;
      const doc = iten.titulo_doc;
      const tipoCD = iten.tipoCD;
      const dia = "em: *30 dia*";
      const dia1 = "em: 30 dia";
      const venc = `vencimento ${dia1}`;
      const telefone = iten.telefone;
      const Vencimento = iten.vctoCD;
      const email = iten.email;
      const Dia = Vencimento.substr(8, 2);
      const Mes = Vencimento.substr(5, 2);
      const Ano = Vencimento.substr(0, 4);
      const Date = Dia + "/" + Mes + "/" + Ano;
      const sms =
        "Prezado Cliente\n\nEstamos entrando em contato para informar que o seu Certificado digital\nModelo: *" +
        tipoCD +
        ". - " +
        titulo +
        ",*\n*" +
        doc +
        "* \nExpira " +
        dia +
        "\n *" +
        Date +
        "*\nfc:" +
        id +
        "\n\nNão deixe para a última hora, Entre em contato agora\npelo WhatsApp (16) 3325-4134 e renove o seu certificado.\nAtenciosamente Equipe Rede Brasil Rp";

      return {
        id,
        titulo,
        doc,
        tipoCD,
        dia1,
        venc,
        telefone,
        Vencimento,
        Date,
        email,
        sms,
      };
    })
  );

  const url15 = "cliente-15";
  const getVence15 = await AxioGet(url15);
  const List15 = await Promise.all(
    getVence15.map(async iten => {
      const id = iten.id;
      const titulo = iten.titulo;
      const doc = iten.titulo_doc;
      const tipoCD = iten.tipoCD;
      const dia = "em: *15 dia*";
      const dia1 = "em: 15 dia";
      const venc = `vencimento ${dia1}`;
      const telefone = iten.telefone;
      const Vencimento = iten.vctoCD;
      const email = iten.email;
      const Dia = Vencimento.substr(8, 2);
      const Mes = Vencimento.substr(5, 2);
      const Ano = Vencimento.substr(0, 4);
      const Date = Dia + "/" + Mes + "/" + Ano;
      const sms =
        "Prezado Cliente\n\nEstamos entrando em contato para informar que o seu Certificado digital\nModelo: *" +
        tipoCD +
        ". - " +
        titulo +
        ",*\n*" +
        doc +
        "* \nExpira " +
        dia +
        "\n *" +
        Date +
        "*\nfc:" +
        id +
        "\n\nNão deixe para a última hora, Entre em contato agora\npelo WhatsApp (16) 3325-4134 e renove o seu certificado.\nAtenciosamente Equipe Rede Brasil Rp";

      return {
        id,
        titulo,
        doc,
        tipoCD,
        dia1,
        venc,
        telefone,
        Vencimento,
        Date,
        email,
        sms,
      };
    })
  );

  const url10 = "cliente-10";
  const getVence10 = await AxioGet(url10);
  const List10 = await Promise.all(
    getVence10.map(async iten => {
      const id = iten.id;
      const titulo = iten.titulo;
      const doc = iten.titulo_doc;
      const tipoCD = iten.tipoCD;
      const dia = "em: *10 dia*";
      const dia1 = "em: 10 dia";
      const venc = `vencimento ${dia1}`;
      const telefone = iten.telefone;
      const Vencimento = iten.vctoCD;
      const email = iten.email;
      const Dia = Vencimento.substr(8, 2);
      const Mes = Vencimento.substr(5, 2);
      const Ano = Vencimento.substr(0, 4);
      const Date = Dia + "/" + Mes + "/" + Ano;
      const sms =
        "Prezado Cliente\n\nEstamos entrando em contato para informar que o seu Certificado digital\nModelo: *" +
        tipoCD +
        ". - " +
        titulo +
        ",*\n*" +
        doc +
        "* \nExpira " +
        dia +
        "\n *" +
        Date +
        "*\nfc:" +
        id +
        "\n\nNão deixe para a última hora, Entre em contato agora\npelo WhatsApp (16) 3325-4134 e renove o seu certificado.\nAtenciosamente Equipe Rede Brasil Rp";

      return {
        id,
        titulo,
        doc,
        tipoCD,
        dia1,
        venc,
        telefone,
        Vencimento,
        Date,
        email,
        sms,
      };
    })
  );

  const url5 = "cliente-5";
  const getVence5 = await AxioGet(url5);
  const List5 = await Promise.all(
    getVence5.map(async iten => {
      const id = iten.id;
      const titulo = iten.titulo;
      const doc = iten.titulo_doc;
      const tipoCD = iten.tipoCD;
      const dia = "em: *5 dia*";
      const dia1 = "em: 5 dia";
      const venc = `vencimento ${dia1}`;
      const telefone = iten.telefone;
      const Vencimento = iten.vctoCD;
      const email = iten.email;
      const Dia = Vencimento.substr(8, 2);
      const Mes = Vencimento.substr(5, 2);
      const Ano = Vencimento.substr(0, 4);
      const Date = Dia + "/" + Mes + "/" + Ano;
      const sms =
        "Prezado Cliente\n\nEstamos entrando em contato para informar que o seu Certificado digital\nModelo: *" +
        tipoCD +
        ". - " +
        titulo +
        ",*\n*" +
        doc +
        "* \nExpira " +
        dia +
        "\n *" +
        Date +
        "*\nfc:" +
        id +
        "\n\nNão deixe para a última hora, Entre em contato agora\npelo WhatsApp (16) 3325-4134 e renove o seu certificado.\nAtenciosamente Equipe Rede Brasil Rp";

      return {
        id,
        titulo,
        doc,
        tipoCD,
        dia1,
        venc,
        telefone,
        Vencimento,
        Date,
        email,
        sms,
      };
    })
  );

  const url1 = "cliente-1";
  const getVence1 = await AxioGet(url1);
  const List1 = await Promise.all(
    getVence1.map(async iten => {
      const id = iten.id;
      const titulo = iten.titulo;
      const doc = iten.titulo_doc;
      const tipoCD = iten.tipoCD;
      const dia = "em: *1 dia*";
      const dia1 = "em: 1 dia";
      const venc = `vencimento ${dia1}`;
      const telefone = iten.telefone;
      const Vencimento = iten.vctoCD;
      const email = iten.email;
      const Dia = Vencimento.substr(8, 2);
      const Mes = Vencimento.substr(5, 2);
      const Ano = Vencimento.substr(0, 4);
      const Date = Dia + "/" + Mes + "/" + Ano;
      const sms =
        "Prezado Cliente\n\nEstamos entrando em contato para informar que o seu Certificado digital\nModelo: *" +
        tipoCD +
        ". - " +
        titulo +
        ",*\n*" +
        doc +
        "* \nExpira " +
        dia +
        "\n *" +
        Date +
        "*\nfc:" +
        id +
        "\n\nNão deixe para a última hora, Entre em contato agora\npelo WhatsApp (16) 3325-4134 e renove o seu certificado.\nAtenciosamente Equipe Rede Brasil Rp";

      return {
        id,
        titulo,
        doc,
        tipoCD,
        dia1,
        venc,
        telefone,
        Vencimento,
        Date,
        email,
        sms,
      };
    })
  );

  const urlNow = "cliente-Now";
  const getVenceNow = await AxioGet(urlNow);
  const ListNow = await Promise.all(
    getVenceNow.map(async iten => {
      const id = iten.id;
      const titulo = iten.titulo;
      const doc = iten.titulo_doc;
      const tipoCD = iten.tipoCD;
      const dia = "*Hoje*";
      const dia1 = "Hoje";
      const venc = `vencimento ${dia1}`;
      const telefone = iten.telefone;
      const Vencimento = iten.vctoCD;
      const email = iten.email;
      const Dia = Vencimento.substr(8, 2);
      const Mes = Vencimento.substr(5, 2);
      const Ano = Vencimento.substr(0, 4);
      const Date = Dia + "/" + Mes + "/" + Ano;
      const sms =
        "Prezado Cliente\n\nEstamos entrando em contato para informar que o seu Certificado digital\nModelo: *" +
        tipoCD +
        ". - " +
        titulo +
        ",*\n*" +
        doc +
        "* \nExpira " +
        dia +
        "\n *" +
        Date +
        "*\nfc:" +
        id +
        "\n\nNão deixe para a última hora, Entre em contato agora\npelo WhatsApp (16) 3325-4134 e renove o seu certificado.\nAtenciosamente Equipe Rede Brasil Rp";

      return {
        id,
        titulo,
        doc,
        tipoCD,
        dia1,
        venc,
        telefone,
        Vencimento,
        Date,
        email,
        sms,
      };
    })
  );

  const list = [
    ...ListNow,
    ...List1,
    ...List5,
    ...List10,
    ...List15,
    ...List30,
  ];

  return list;
};
