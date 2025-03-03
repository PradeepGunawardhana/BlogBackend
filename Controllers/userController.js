const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const user = require('../Models/userModel')
const {body,validationResult} = require('express-validator');

require('dotenv').config();

async function UserRegister(req, res) {

//validating Email


    try {

        const { userName, email, password } = req.body;

        const existingUser = await user.findOne({ email });

        //check user already registerd
        if (existingUser) {
            return res.status(400).json({ message: "User already Exist !" });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new user({ email, userName, password: hashedPassword });

          await newUser.save();

            return res.status(200).json({ message: "User Registerd Successfully" })

        } catch (error) {
            return res.status(300).json({ message: "Failed to register the user" })
        }



    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message })
    }

}




async function userLogin(req, res) {

    try {

        const { email, password } = req.body;

        const existingUser = await user.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "Invalid Email or User." });
        }

        const passIsMatch = await bcrypt.compare(password, existingUser.password)

        //checking password
        if (!passIsMatch) {
            return res.status(400).json({ message: "Invalid Password." });
        }

        //Send the Token and save details user.id
        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.json({ token });

    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}















module.exports = { UserRegister, userLogin };