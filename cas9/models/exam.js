const mongoose = require('mongoose');
const examShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    student: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Student" 
    },
    subject: String,
    date: Date,
    grade:Number

}, {collection: 'exams'});

const Exam = mongoose.model('Exam', examShema);

async function getExamsForStudent(username){
    const allExams = await Exam.find().populate('student').exec();
    const exams = [];
    for(const exam of allExams){
        if(exam.student.username === username){
            exams.push(exam);
        }
    }
    return exams;
}

module.exports = {
    getExamsForStudent
}