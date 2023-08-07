const express = require('express');
const {home,about,loginPage,registerPage} = require('./controllers/pages');
const register = require('./controllers/user');

const route = express.Router();

//route for home page
route.get('/',home)
route.get('/about',about);

route.get('/login',loginPage)
route.get('/register',registerPage)
route.post('/register',register)



module.exports = route;