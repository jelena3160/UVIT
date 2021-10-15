const express = require('express');
const router = express.Router();

const path = require('path');

router.get("./student", function(req, res, next){
    const data = req.query;
    console.log('username', data.username);
    console.log('password', data.password);
    res.sendFile(path.join(__dirname, "..",  "public", "student.html"));
})


module.exports = router;