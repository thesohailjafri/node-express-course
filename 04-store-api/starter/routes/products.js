const express = require('express')
const router = express.Router()
const { getAllProducts, getProduct } = require('../controllers/products')

router.route('/').get(getProduct)
router.route('/all').get(getAllProducts)

module.exports = router