//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require('ejs');
//const date = require(__dirname + "/date.js");

const app = express();

//const items = ["Buy food", "Cook food", "Eat food"];
//const workItems = [];



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

Connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});
mongoose. Set('strictQuery', false);

//Mongoose Schema
const itemsSchema = {
  name: String
};

//Mongoose Model
const Item = mongoose.model("Item", itemsSchema);



app.get("/", function(req, res){
  res.render("list", {listTitle: "Today", newListItems: items});
});

app.post("/", function(req, res){
  //console.log(req.body);
  let Item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(Item);
    res.redirect("/work");
  } else {
    items.push(Item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
