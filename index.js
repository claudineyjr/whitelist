require('app-module-path').addPath(__dirname);
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', require('./routes'));

app.listen(3000);