const express = require('express');
const {home,about,loginPage,registerPage} = require('./controllers/pages');
const {register,login,logout} = require('./controllers/user')
const {adminLoginPage,adminLoginFun,adding_product} = require('./controllers/admin')

const route = express.Router();

//route for home page
route.get('/',home)
route.get('/about',about);

route.get('/login',loginPage)
route.get('/register',registerPage)
route.post('/register',register)
route.post('/',login)
route.get('/logout',logout)
route.get('/admin',adminLoginPage)
route.post('/adminlogin',adminLoginFun)
route.post('/addproduct',adding_product)

module.exports = route;





