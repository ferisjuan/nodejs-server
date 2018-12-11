// express
const express = require('express');
const router = express.Router()

// controllers
const productsController = require('../controllers/product');

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

//Can use the /add-product on both routes since the method is direferent, it will yield a direferent route
// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;