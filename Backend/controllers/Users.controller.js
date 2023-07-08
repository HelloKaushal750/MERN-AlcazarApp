const express = require("express");
const { UserModel } = require("../models/Users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserController = express.Router();

UserController.post("/signup", (req, res) => {
  try {
    const { fullname, email, contact, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
      return res
        .status(404)
        .json({ message: "Password and Confirm Password are not matched" });
    }
    bcrypt.hash(password, 8, async function (err, hash) {
      if (err) {
        res.status(404).json({ message: "Something went wrong" });
      } else {
        const user = new UserModel({
          fullname,
          email,
          contact,
          password: hash,
          confirmpassword,
        });
        await user.save();
        res.status(200).json({ message: "Registration Successful" });
      }
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
    console.log(error);
  }
});

UserController.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.status(404).json({ message: "Something went wrong" });
      }
      if (result) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message: "Login Successful", token, user });
      } else {
        res.status(404).json({
          message: "Invalid Credentials, please signup if you haven't",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No User Found, Please Register" });
  }
});

module.exports = { UserController };
