var express = require('express');
var bodyParser = require('body-parser');
//var cors = require('cors');
var mongoose = require('mongoose');
var morgan = require('morgan');
var app = express();
var codeRouter = require('./route/route')

app.use(bodyParser.json());
//app.use(cors());
app.use(morgan('dev'));
app.use(express.static("../public"));
app.use("/codes", codeRouter);

mongoose.connect("mongodb://localhost/codes", function(){
    console.log("connected To Database!!")
});

app.listen(3000, function(){
    console.log("On Port 3000 !!");
})