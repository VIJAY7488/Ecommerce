const express = require('express');
const { userRegister } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/auth/register', userRegister);

module.exports = authRouter;