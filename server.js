const express = require('express');
const routes1 = require('./src/routes1');
const routes2 = require('./src/routes2');
const routes3 = require('./src/routes3');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes1)
app.use(routes2)
app.use(routes3)

app.listen(process.env.PORT || 3050, function () {
    console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
});