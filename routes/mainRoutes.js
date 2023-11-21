const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

/* / */
router.get('/', mainController.home)

/*/about */
router.get('/about', mainController.about)

/*/contact */
router.get('/contact', mainController.contact)

/*/music */
router.get('/music', mainController.music)


module.exports = router;