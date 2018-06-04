var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

<<<<<<< HEAD
var taskList = ["test","test"];
=======
//The user class
class User {
  constructor(fname,lname,email,password,username,tasks){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.username = username;
    this.tasks = tasks;
  }
}
var taskList = ["Task","Task","Task"];
>>>>>>> 81f43e95b16f0384a8cad4228c01c6d15b4152a9

app.get("/", function(req, res) {
  res.send("Root page go to /todo for your ToDo-List");
});

app.get("/todo", function(req, res) {
  res.render("home", taskList);
});

app.get("*", function(req,res) {
  res.send("You may be lost: there is noting here")
});

app.listen(3000);
console.log("Server is listening on Port 3000")