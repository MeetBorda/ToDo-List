var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//The user class
class User {
  constructor(fname,lname,email,password,username){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.username = username;
    var tasks = [];
  }
}

app.get("/", function(req, res) {
  var user = new User();
  res.render("home", user);
});

app.get("*", function(req,res) {
  res.render("home");
});

app.listen(3000);
console.log("Server is listening on Port 3000")