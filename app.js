// Node modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// App definition
const app = express();

// set templating engine as a global (plugin)
app.set('view engine', 'pug');
app.set('views', 'views');

// local modules
const adminData = require('./routes/admin');
const shopData = require('./routes/shop');

// get body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// get routes
app.use('/admin', adminData.routes);
app.use(shopData.routes);

app.use((req, res, next) => {
	res.status(404).render('404')
})

// set listener
app.listen(3000)
console.log('Listening at port 3000');