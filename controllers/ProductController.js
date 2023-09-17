const Product = require("../models/product.js")

module.exports = class ProductController{
    static async showProducts(req,res){
        const products = await  Product.getAll()
        res.render("products/all", {products})
    }

    static createProduct(req,res){
        res.render("products/create")
    }
    static async createProductPost(req,res){
        const {name,price,description,image} = req.body
        const product = new Product(name,price,image,description)
        await product.save()
        res.redirect("/product")
    }
    
}