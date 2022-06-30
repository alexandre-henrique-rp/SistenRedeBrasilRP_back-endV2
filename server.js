const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes)


app.listen(process.env.PORT || 3045, function () {
    console.log('🚀🚀🤖 servidor em execução')
});