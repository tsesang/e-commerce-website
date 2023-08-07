const userModel = require("../models/models");

//render the home page
const home = async(req,res)=>{
    if(req.session.email){
        const userObj = await userModel.findOne({email:req.session.email})
        //index page with fname and logout
        return res.render('index',{userdata:userObj})
    }
    else{
        //index page with sign in and register button
        return res.render('index',{userdata:""})
    }
    res.render('index');
}

const about = async(req,res)=>{
    if(req.session.email){
        const userObj = await userModel.findOne({email:req.session.email})
        //index page with fname and logout
        return res.render('about',{userdata:userObj})
    }
    else{
        //index page with sign in and register button
        return res.render('about',{userdata:""})
    }
}

const loginPage = (req,res)=>{
    return res.render('login',{message:""})
}

const registerPage = (req,res)=>{
    res.render('register',{msg:""})
}

module.exports = {home,about,loginPage,registerPage}


