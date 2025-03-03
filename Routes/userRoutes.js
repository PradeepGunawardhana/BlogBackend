const router = require('express').Router();
const authmiddleware = require('../Middleware/auth');
const userController = require('../Controllers/userController');

const validator = require('../Middleware/validator');

router.route("/register").post(

    validator,
   userController.UserRegister
)




router.route("/login").post(
  userController.userLogin
)

module.exports = router;
