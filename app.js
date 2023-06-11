const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render("headerHome")
})
app.get('/', (req,res)=>{
    res.render("footerHome")
})
app.get('/', (req,res)=>{
    res.render("bodyHome")
})

app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000")
})