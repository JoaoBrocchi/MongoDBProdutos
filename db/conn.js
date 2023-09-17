const{ MongoClient } = require("mongodb");
const dotenv = require("dotenv").config()


const uri = process.env.URI
const Client = new MongoClient(uri)

async function run(){
    try {
        await Client.connect()
        console.log("conectado com sucesso")
    } catch (error) {
        console.log("o Erro Foi :", error)
    }
}
run()

module.exports = Client