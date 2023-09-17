
const mongoose = require("../db/conn.js")

const Product = mongoose.model("Poroduct",new mongoose.Schema({
    name :{type : String, required : true},
    image :{type : String},
    price :{type: Number,required : true},
    description : {type: String}
}))


module.exports = Product
