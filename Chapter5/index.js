const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const routes = require("./routes/route");
const Middleware = require("./middleware/index");
const {v4: uuidv4} = require('uuid');
const fs = require("fs");

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");   

app.use(routes);

app.use(Middleware.Error);

app.listen(2000, function(){
    console.log("Connect to port 2000")
})