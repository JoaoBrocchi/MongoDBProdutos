const conn = require("../db/conn.js")
module.exports = class Product{
    constructor(name,price,image,description) {
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }

    save(){
        const product = conn.db().collection("products").insertOne({
            name : this.name,
            price : this.price,
            description : this.description,
            image : this.image
        })
        return product
    }
    static getAll(req,res){
        const products = conn.db().collection("products").find().toArray()
        return products
    }
}
