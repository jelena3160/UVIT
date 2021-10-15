const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Fakultet",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const studentRoutes = require('./routes/student');
const examRoutes = require('./routes/exam');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.use('/hello-world', function(req, res,next){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(studentRoutes);
app.use('/ispiti', examRoutes);

app.use(function(err,req, res, next){
    console.log('Greska na serveru');
    console.log(err);
    res.render('error.ejs', {
        message: err.message
    });
});

module.exports = app;
