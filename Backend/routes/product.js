const express =  require ("express");
const { getProducts, getSingleProduct } = require("../controller/productController.js");
const router = express.Router();
//route mattum thaniya create pani export panigalam for products

router.route('/products').get(getProducts)
router.route('/product/:id').get(getSingleProduct)


module.exports = router;