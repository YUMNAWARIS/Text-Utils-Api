const express = require("express");
const textController = require('../controllers/textController');

const router = express.Router();

// POST 'text/capitalizeAll'
router.post('/capitalize',textController.capitalize);
router.post('/upper',textController.upper);
router.post('/lower',textController.lower);
router.post('/removepunc',textController.removepunc);
router.post('/removespace',textController.removespace);
router.post('/removespecificchar',textController.removespecificchar);
router.post('/removenewline',textController.removenewline);
router.post('/replaceword',textController.replaceword);
router.post('/charcount',textController.charcount);
router.post('/wordcount',textController.wordcount);

module.exports = router;