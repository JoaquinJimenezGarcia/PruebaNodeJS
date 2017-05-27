/**
 * Created by garci on 27/05/2017.
 */

var express = require('express');
const pug = require('pug');
var app = express();

app.set("view engine","pug");
app.use(express.static("public"));

app.get("/",function (req,res) {
    res.render("index");
});

app.listen(8080);