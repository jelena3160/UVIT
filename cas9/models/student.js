const mongoose = require('mongoose');

const studentShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    surname: String,
    major: String,
    avg_grade:{
        type:Number,
        default: 0
    },
    grades: {
        type: [Number],
        default: []
    },
    note: {
        type: String,
        required: true,
        default: ""
    }
}, {collection: "students"});

const StudentModel = mongoose.model("Student", studentShema);

async function getStudentByUsername(username){
    const students = await StudentModel.find({ username: username}).exec();
    if(students.length === 0){
        return null;
    } else{
        return students[0];
    }
}

function doPasswordsMatch(student, password){
    return student !== null && student.password === password;
}

async function updateStudentInfo(student){
    await StudentModel.updateOne({
        username: student.username
    },
    {
        $set: {password: student.password, name: student.name, surname: student.surname, major: student.major}
    }).exec();
}

async function deleteStudent(username){
    await StudentModel.deleteOne({
        username: username
    }).exec();
}

async function getStudentById(id){
    const student = await StudentModel.findById(id).exec();
    return student;
}


async function createStudent(username, password, name, surname, major){
    
    const newStudent = new StudentModel();
    newStudent._id = new mongoose.Schema.ObjectId();
    newStudent.username = username;
    newStudent.password = password;
    newStudent.name = name;
    newStudent.surname = surname;
    newStudent.major = major;

    const studentFromDB = await newStudent.save().exec();
    return studentFromDB;

}

module.exports = {
    getStudentByUsername,
    doPasswordsMatch,
    updateStudentInfo,
    deleteStudent,
    getStudentById,
    createStudent
}