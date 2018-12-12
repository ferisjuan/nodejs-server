// express
const express = require('express');
const router = express.Router()

// controllers
const adminController = require('../controllers/admin');

// routes
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.post('/add-product', adminController.postAddProduct);


module.exports = router;