const express = require('express');
const path = require('path');

const studentRoutes = require('./routes/student');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use('/hello-world', function(req,res, next){
    //res.sendFile(__dirname + "/public/index.html");
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(studentRoutes); 

app.use(function(err, req, res, next){
    console.log("Greska na serveru");
    console.log(err);
});

module.exports = app;