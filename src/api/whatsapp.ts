import 'dotenv/config';
import axios from 'axios';

export const WhatsAppSms = async (tel: string, msg: string) => {
  const url = 'https://api.inovstar.com/core/v2/api/chats/send-text';

  await axios({
    method: 'POST',
    url: url,
    headers: {
      'access-token': process.env.ZAP_TOKEN,
      'Content-Type': process.env.ZAP_TYPE,
    },
    data: {
      number: '55' + tel,
      message: msg,
      forceSend: true,
      verifyContact: false,
    },
  })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response.data;
    });
};
