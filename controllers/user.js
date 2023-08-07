const userModel = require("../models/models");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  let userExists = await userModel.findOne({ email: req.body.email });

  //check if email exists or not

  if (userExists) {
    //if exisit you cannot register
    return res.render("register", {
      msg: "user with this email already exists",
    });
  }

  //chekc if passwrod were matching or not

  if (req.body.password == req.body.cpassword) {
    //password were matching

    // here password is to encrypt
    const hashPass =await bcrypt.hash(req.body.password, 10);

    console.log(req.body)
    //we are creating an entry here
    await userModel.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashPass,
    });
    return res.render("register", { msg: "sign up successful" });
  }

  //password not mathcing
  else {
    return res.render("register", {
      msg: "passwords were not matching",
    });
  }
};

const login=async (req,res)=>{
    //email validation
    const accountExists = await userModel.findOne({email:req.body.email})
    if(accountExists){
        //password validation
        const correct = await bcrypt.compare(req.body.password,accountExists.password);
        if(correct){
            req.session.email=req.body.email;  // or accountexists.email
            return res.redirect('/')
        }
        //incorrect password
            return res.render('login',{message:"password incorrect ... "})
    }
    else{
        return res.render('login',{message:"invalid email"});
    }
}

const logout = (req,res)=>{
    req.session.email=false;
    res.redirect('/');
}

module.exports = {register,login,logout};




