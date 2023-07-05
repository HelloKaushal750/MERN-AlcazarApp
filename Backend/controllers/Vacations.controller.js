const express = require("express");
const { VacationModel } = require("../models/Vacations.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const VacationController = express.Router();

VacationController.get("/", async (req, res) => {
  try {
    if (req.query.page || req.body.search || req.body.location) {
      res.status(200).json({ message: "Work Pending" });
    } else {
      const vacation = await VacationModel.find();
      if (vacation.length > 0) {
        res.status(200).json(vacation);
      } else {
        res.status(200).json({ message: "No Vacation Found!" });
      }
    }
  } catch (error) {
    res.send({ message: "Something went wrong" });
  }
});

VacationController.post("/", async (req, res) => {
  try {
    const { image, location, price, description, category, userId } = req.body;
    const vacation = new VacationModel({
      image,
      location,
      price,
      description,
      category,
      userId,
    });
    await vaction.save();
    res.status(200).json({ message: "vacation Data Created" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

module.exports = { VacationController };
