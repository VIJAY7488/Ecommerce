const User = require("../models/userModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

//Account register
const userRegister = async(req, res) => {
    const {fullName, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            success: false, message: "Email already registered"
        })
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({
            fullName,
            email,
            password: hashedPassword
        });

        await user.save();

        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '1d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({success: true, message: "Account created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: true, message: "Some error occured"})
    }
};

//Login
const userLogin = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findById(req.body.id);

        if(!user){
            return res.status(404).json({
                success: false, message: "User not found"
            })
        };

    } catch (error) {
        
    }
}

module.exports = {
    userRegister,
    userLogin
}