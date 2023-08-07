const express = require('express');
const {home,about,loginPage,registerPage} = require('./controllers/pages');
const route = express.Router();

//route for home page
route.get('/',home)
route.get('/about',about);

route.get('/login',loginPage)
route.get('/register',registerPage)



module.exports = route;