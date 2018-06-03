var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

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

app.get("/", function(req, res) {
  res.send("Root page go to /todo for your ToDo-List");
});

app.get("/todo", function(req, res) {
  /* I have no clue why this does not work
  var user = new User("matt","vast","mvast1@g.com","123","mvast1");
  res.render("home", user);
  */
  res.render("home", user = new User("matt","vast","mvast1@g.com","123","mvast1",taskList));
});

app.get("*", function(req,res) {
  res.send("You may be lost: there is noting here")
});

app.listen(3000);
console.log("Server is listening on Port 3000")