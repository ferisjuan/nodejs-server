const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const router = require('./routes/router');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyparser.urlencoded({ extended: true }))
app.use(router);

app.listen(3030);
console.log("listening at port 3030");