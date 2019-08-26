let express = require("express");
let app = express();
let viewsPath = __dirname + "/views/";
let bodyParser = require("body-parser");
let ejs = require("ejs");

let db = [];



app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.static('images'));
app.use(express.static('css'));

app.get("/", function(req, res) {
  console.log("Homepage request");
  let fileName = viewsPath + "index.html";
  res.sendFile(fileName);
});
// GET Requests

app.get("/addNewTask", function(req, res) {
  console.log("Add New Task request");
  let fileName = viewsPath + "addtask.html";
  res.sendFile(fileName);
});
app.get("/listAllTasks", function(req, res) {
    console.log("Homepage request");
    res.render("alltasks", { tasks: db });
  });
  

// POST Requests

app.post("/addNewTask", function(req, res) {
  console.log(req.body);
  db.push(req.body);
  res.render("alltasks", { tasks: db });
});

app.listen(8080);
