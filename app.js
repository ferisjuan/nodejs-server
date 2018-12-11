// Node modules
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// config params
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// config templates and views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

// controllers
var errorController = require('./controllers/error');

// local modules
const adminRoutes = require('./routes/admin');
const shopData = require('./routes/shop');

// get routes
app.use('/admin', adminRoutes);
app.use(shopData.routes);

app.use(errorController.get404);

// set listener
app.listen(3030);
console.log('Listening at port 3030');