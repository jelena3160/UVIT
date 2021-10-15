const studentModel = require('../models/student');

async function getStudentByUsername(req,res,next){
    try {
        const username = req.body.username;
        const password = req.body.password;

        const student = await studentModel.getStudentByUsername(username);
        if(student === null){
            throw new Error('Nije pronadjen student za dati username'); 
        }
        
        const passwordsMatch = studentModel.doPasswordsMatch(student, password);

        if(student !== null && !passwordsMatch ){
            throw new Error('Pogresili ste lozinku. Pokusajte ponovo.')
        }
        res.render('student.ejs', {
            student: student
        });
    } catch (err) {
        next(err)
    }
    
}

async function updateStudentInfo(req,res,next){
    try {
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const surname = req.body.surname;
        const major = req.body.major;

        const student = await studentModel.getStudentByUsername(username);
        if(student === null){
            throw new Error('Nije pronadjen student za dati username');
        }

        student.password = password;
        student.name = name;
        student.major = major;
        student.surname = surname;

        await studentModel.updateStudentInfo(student);
        res.render('student.ejs', {
            student: student
        });
    } catch (error) {
        next(error);
    }
};

async function deleteStudentByUsername(req, res, next){
    try {
        const username = req.params.username;
        const password = req.body.password;

        const student = await studentModel.getStudentByUsername(username);
        if(student.password !== password){
            throw new Error('Brisanje nije uspesno. Lozinka je pogresna');
        }

        await studentModel.deleteStudent(username);

        res.redirect("/index.html");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getStudentByUsername, 
    updateStudentInfo,
    deleteStudentByUsername
};