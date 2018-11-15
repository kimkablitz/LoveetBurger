var express = require("express");
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
// var bodyParser = require('body-parser');


// app.use(express.static(process.cwd() + '/public'));
// app.use(bodyParser.urlencoded({
//     extended: false
//   }));
  
app.use(methodOverride('_method'));

var router = require("./controllers/burgers_controller.js");
app.use(router);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})

// app.get('/', function(req,res){
//     res.render("index")
// })