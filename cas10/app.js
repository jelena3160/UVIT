const express = require('express');
const app = express();

const studentRoutes = require('./routes/student');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.use('/hello-world', function(req, res,next){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(studentRoutes);

app.use(function(err,req, res, next){
    console.log('Greska na serveru');
    console.log(err);
});
module.exports = app;
