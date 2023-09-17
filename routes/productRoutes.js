const router = require("express").Router()
const ProductController = require("../controllers/ProductController.js")

router.route("/")
    .get(ProductController.showProducts)

router.route("/createproduct")
    .get(ProductController.createProduct)
    .post(ProductController.createProductPost)
module.exports = router;

router.route("/getproduct/:id")
    .get(ProductController.getProduct)

router.route("/removeproduct/:id")
    .post(ProductController.removeProduct)

router.route("/editproduct/:id")
    .get(ProductController.editProduct)
    .post(ProductController.editProductPost)