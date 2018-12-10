// express
const express = require('express');
const router = express.Router();

// local modules
const adminData = require('./admin');


router.get('/', (req, res, next) => {
	const products = adminData.products;

	// the join method construct the files system path so it can work in linux or in windows sistems
	res.render('shop', { products, docTitle: 'Shop' });
})

exports.routes = router;