const express = require("express")
const conn = require("./db/conn.js")
const productsRouter = require("./routes/productRoutes.js")
const path = require('path')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'public')))
app.use("/products",productsRouter)

app.listen(3000,(req,res)=>{
    console.log("agr foi")
})