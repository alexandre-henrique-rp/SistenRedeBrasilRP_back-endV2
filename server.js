import express from 'express';

import routes1 from './src/routes1.js';
import routes2 from './src/routes2.js';
import routes3 from './src/routes3.js';
import routes4 from './src/routes4.js';
import router5 from './src/routes5.js';
import router6 from './src/routes6.js';
import router7 from './src/routes7.js';
import router8 from './src/routes8.js'

import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes1)
app.use(routes2)
app.use(routes3)
app.use(routes4)
app.use(router5)
app.use(router6)
app.use(router7)
app.use(router8)




app.listen(process.env.PORT || 3050, function () {
    console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
});

//painel.redebrasilrp.com.br