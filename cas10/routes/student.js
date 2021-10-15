const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/student', function(req, res, next){
    const data = req.query;
    console.log(data.username);
    console.log(data.password);
    res.sendFile(path.join(__dirname, '..','public', 'student.html'));

});

module.exports = router;