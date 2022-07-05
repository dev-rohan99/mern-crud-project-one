const express = require('express');
const { createProduct, readProduct, updateProduct, deleteProduct, readProductById } = require('../controllers/productsController');
const router = express.Router();

// create product route
router.post('/create', createProduct);
// read product route
router.get('/', readProduct);
// read single product route
router.get('/:id', readProductById);
// update product route
router.post('/update/:id', updateProduct);
// read product route
router.delete('/delete/:id', deleteProduct);


module.exports = router;
