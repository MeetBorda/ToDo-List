var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

var taskList = ["test","test"];

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