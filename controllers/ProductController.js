const { ObjectId } = require("mongodb")
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
        const {name,image,price,description,} = req.body
        const product = new Product(name,image,price,description)
        await product.save()
        res.redirect("/products")
    }
    static async getProduct(req,res){
        
        const product = await Product.getProductById(req.params.id)
        
        res.render("products/product", {product: product})
    }
    static async removeProduct(req,res){
       await  Product.removeProductById(req.params.id)
       res.redirect("/products")
    }
    
    static async editProduct(req,res){
        const product = await Product.getProductById(req.params.id)
        res.render("products/edit", {product:product}) 
    }
    static async editProductPost(req,res){
        const {name,image,price,description,id} = req.body
        const product =  new Product(name,image,price,description)
        
        await product.editProduct(id)
        res.redirect("/products")
        
        
    }
    
}