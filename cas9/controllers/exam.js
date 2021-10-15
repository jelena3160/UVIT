const Exam = require('../models/exam');

async function getExamsForStudent(req, res, next){
    try {
        const username = req.query.username;
        const exams = await Exam.getExamsForStudent(username);
        res.render('exam.js', {
            username, exams
        });
    } catch (error) {
        next(error);
    }
}

module.exports ={
    getExamsForStudent
}