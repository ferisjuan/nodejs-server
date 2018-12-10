// Node modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// App definition
const app = express();

// local modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// get body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// get routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// set listener
app.listen(3000)
console.log('Listening at port 3000');