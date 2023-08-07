const products = require("../models/product");
const userModel = require("../models/models");
const bcrypt = require("bcrypt");

const adminLoginPage = (req, res) => {
  return res.render("adminlogin", { message: "" });
};

const adminLoginFun = async (req, res) => {
  //email validation
  const accountExists = await userModel.findOne({ email: "admin@gmail.com" });
  if (accountExists) {
    //password validation
    const correct = await bcrypt.compare(
      req.body.password,
      accountExists.password
    );
    if (correct) {
      req.session.admin = req.body.email; // or accountexists.email
      return res.render("/add_products");
    }
    //incorrect password
    return res.render("adminlogin", { message: "password incorrect ... " });
  } else {
    return res.render("adminlogin", { message: "invalid email" });
  }
};

const adding_product = (req, res) => {
  const image = req.files.image;

  //__dirname means current dirctory
  // ./root directory
  //this line will save the img in folder

  image.mv("./" + "static/products/" + image.name);

  products.create({
    p_name: req.body.p_name,
    p_des: req.body.p_des,
    price: req.body.price,
    image: "products/" + image.name, //path to the saved img
  });
  return res.render("add_products", { msg: "product added successfully" });
};

module.exports = { adminLoginPage, adminLoginFun, adding_product };
