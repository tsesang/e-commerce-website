const express = require("express");
const app = express();
const path = require("path");
const route = require("./route");

//for views html files
app.set("view engine", "ejs");
app.set("views", "views");

//for static file
app.use(express.static(path.join((__dirname, "static"))));

app.use(route);








app.listen(3001, () => {
  console.log("server started :  http://localhost:3001/");
});
