const mongoose = require("mongoose")
const dotenv = require("dotenv").config()


const uri = process.env.URI


async function main(){
    await mongoose.connect(uri)
    console.log("conectado com sucesso ao banco usando mongoose")
}
main().catch(err => console.log("erro na conxexão"));
module.exports = mongoose