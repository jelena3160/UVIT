const express = require('express');
const app = express();

const controller = require('../controllers/exam.js');

const router = express.Router();

router.get('/', controller.getExamsForStudent);
module.exports = router;