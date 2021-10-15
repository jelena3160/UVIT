const express = require('express');
const studentController = require('../controllers/student.js');
const router = express.Router();

router.post('/student', studentController.getStudentByUsername);
router.post('/student/update', studentController.updateStudentInfo);
router.post('/student/delete/:username/', studentController.deleteStudentByUsername);
module.exports = router;