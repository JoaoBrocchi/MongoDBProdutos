const { getProduct } = require("../controllers/ProductController.js")
const conn = require("../db/conn.js")
const {ObjectId} = require("mongodb")
module.exports = class Product{
    constructor(name,image,price,description) {
        this.name = name
        this.image = image
        this.price = price
        this.description = description
        
    }

    save(){
        const product = conn.db().collection("products").insertOne({
            name : this.name,
            image : this.image,
            price : this.price,
            description : this.description,
            
        })
        return product
    }
    static getAll(req,res){
        const products = conn.db().collection("products").find().toArray()
        return products
    }
    static async getProductById(id){
        
        const product = await conn
        .db()
        .collection("products")
        .findOne({_id: new ObjectId(id)})

        return product
    }
    static async removeProductById(id){
        await conn
        .db()
        .collection("products")
        .deleteOne({_id: new ObjectId(id)})
        return
        
    }
    async editProduct(id){
        await conn
        .db()
        .collection("products")
        .updateOne({_id: new ObjectId(id)},{$set:this})
        return
        
    }
}
