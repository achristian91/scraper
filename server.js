// Require dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up ports 
var PORT = process.env.PORT || 3000;

// Starts express app
var app = express();

// Creates express router  
var router = express.Router();

//Requires router to pass object
require("./config/routes")(router);

// Makes requests go through middleware
app.use(express.static(__dirname + "/public"));

//connects handlebars to express
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

//uses deployed db if not uses loacl mongoheadline 
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connects mongoose to database
mongoose.connect(db, function (error) {
    //Logs any errors
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is sucessful");
    }
});

app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});
