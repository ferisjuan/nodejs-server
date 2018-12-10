const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	console.log(adminData.products);

	// the join method construct the files system path so it can work in linux or in windows sistems
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

exports.routes = router;