const express = require('express');
const { userRegister, userLogin } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/auth/register', userRegister);
authRouter.post('/auth/login', userLogin);

module.exports = authRouter;