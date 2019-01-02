// express
const express = require('express');
const router = express.Router();

// controllers
const shopController = require('../controllers/shop');

// routes
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

exports.routes = router;