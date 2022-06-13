const userfile = require("../method/user.json");
const {v4: uuidv4} = require('uuid');
const fs = require("fs");

class Main {
  static homepage(req, res, next) {
      res.render("home")  
  }

  static gamepage(req, res, next) {
    res.render("suit")
  }

  static loginpage(req,res,next){
    res.render("login")
  }

  static methoddaftar(req,res,next){
    res.render("daftar")
  }
  
  static methoddaftarbaru(req,res,next){
    const olddata = fs.readFileSync("./method/user.json", {encoding: "utf-8"})
    let datauser = JSON.parse(olddata);
    const ids = req.body.username;
    const pass = req.body.password;
    let dataadd = {id: uuidv4() ,username : ids, password : pass}
    datauser.push(dataadd);
    let newdata = JSON.stringify(datauser);
    fs.writeFileSync("./method/user.json",newdata);
    res.render("login")
}

  static loginmethod(req,res,next){
    const id = req.body.username;
    const pass = req.body.password;
    let idx = userfile.findIndex(x => x.username === id);
    const checkPassword = userfile[idx].password;
    if(pass == checkPassword){
      res.render("suit");
    }else{
      res.send("Error");
    }
  }
}


module.exports = Main