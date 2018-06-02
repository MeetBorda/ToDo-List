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
    var tasks = ["test", "test","test"];
  }
}

app.get("/", function(req, res) {
  res.send("Root page go to /todo for your ToDo-List");
});

app.get("/todo", function(req, res) {
  /*
  var user = new User("matt","vast","mvast1@g.com","123","mvast1");
  res.render("home", user);
  */
  res.render("home", user = new User("matt","vast","mvast1@g.com","123","mvast1"));
});

app.get("*", function(req,res) {
  res.send("You may be lost: there is noting here")
});

app.listen(3000);
console.log("Server is listening on Port 3000")