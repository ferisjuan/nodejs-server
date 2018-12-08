const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
	// the join method construct the files system path so it can work in linux or in windows sistems
	res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;