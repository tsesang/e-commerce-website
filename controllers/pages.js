
//render the home page
const home = (req,res)=>{
    res.render('index');
}

const about = (req,res)=>{
    return res.render('about')
}

const loginPage = (req,res)=>{
    return res.render('login')
}

const registerPage = (req,res)=>{
    res.render('register')
}

module.exports = {home,about,loginPage,registerPage}


