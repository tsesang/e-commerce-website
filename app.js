const express = require("express");
const app = express();
const path = require("path");
const mongoose=require('mongoose')

const route = require("./route");
const exp = require("constants");

mongoose.connect("mongodb://localhost:27017/Ecommerce")
.then(()=>{
  console.log("db connected success")
})


//middleware for forms
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//for views html files
app.set("view engine", "ejs");
app.set("views", "views");

//for static file
app.use(express.static(path.join((__dirname, "static"))));





app.use(route);








app.listen(3001, () => {
  console.log("server started :  http://localhost:3001/");
});
