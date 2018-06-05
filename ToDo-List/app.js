/* Set up the libraries required */
var express = require("express");
var app = express();

/* ------------------------------------------------------- */
/* set ejs as the default file type and tell express to look in the 
 * public directory 
 */
app.set("view engine", "ejs");
app.use(express.static("public"));

//var taskList = ["test","test"];


/* render the main page instead of the root */
app.get("/", function(req, res) {
	res.render("home", taskList = ["test","test"]);
});

/* render the main page  */
app.get("/todo", function(req, res) {
    res.render("home", taskList = ["test","test"]);
});

/* render the new task page */
app.get("/todo/newtask", function(req, res) {
    res.send('newtask');
});

/* render the main page after making a change */
app.post('/todo', function(req, res) {
	res.render("home", taskList);
});

/* render the single task page */
app.get("/todo/:id", function(req, res) {
	res.send("the single task page");
});

/* render the edit page */
app.get("/todo/:id/edit", function(req, res) {
	res.send("the edit page");
});

/* render the single task page after an edit*/
app.put("/todo/:id", function(req, res) {
	res.send("the single task page");
});

/* render the delete page */
app.delete("/todo/:id/delete", function(req, res){
	res.send("the delete page")
});

/* catch all redirect to main page */
/*
app.get("*", function(req,res) {
  res.render("home", taskList);
});
*/

/*  */
app.listen(3000);
console.log("Server is listening on Port 3000")