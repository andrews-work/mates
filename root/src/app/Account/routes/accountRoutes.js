
const router = require('express').Router();
const accountController = require('../controllers/accountController');

// Route to handle user registration
router.post('/register', accountController.userCreate);

module.exports = router;