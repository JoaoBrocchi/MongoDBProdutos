const router = require("express").Router()
const ProductController = require("../controllers/ProductController.js")
router.route("/")
    .get(ProductController.showProducts)

router.route("/createproduct")
    .get(ProductController.createProduct)
    .post(ProductController.createProductPost)
module.exports = router;