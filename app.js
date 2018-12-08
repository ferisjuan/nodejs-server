// Node modules
const express = require('express');
const bodyParser = require('body-parser');

// App definition
const app = express();

// local modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// get body parser
app.use(bodyParser.urlencoded({ extended: true }));

// get routes
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).send('<h1>Page not found!!</h1>')
})

// set listener
app.listen(3000)
console.log('Listening at port 3000');