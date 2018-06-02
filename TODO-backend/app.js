var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("*", function(req,res) {
	res.render("splat");
});

app.listen(3000);
console.log("Server is listening on Port 3000")