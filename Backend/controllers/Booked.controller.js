const express = require("express");
const { BookedModel } = require("../models/Booked.model");
const BookedController = express.Router();

BookedController.get("/", async (req, res) => {
  try {
    const booked = await BookedModel.find({ userId: req.body.userId });
    if (booked.length > 0) {
      res.status(200).json(booked);
    } else {
      res.status(200).json({ message: "No Destination Found!" });
    }
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

BookedController.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      contactNo,
      type,
      date,
      tickets,
      pricewithpassengers,
      image,
      location,
      price,
      description,
      userId,
    } = req.body;
    const booked = new BookedModel({
      name,
      email,
      contactNo,
      type,
      date,
      tickets,
      pricewithpassengers,
      image,
      location,
      price,
      description,
      userId,
    });
    await booked.save();
    res.status(200).json({ message: "Booking Data Created" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
});

BookedController.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookedVacation = await BookedModel.findOneAndDelete({
      _id: id,
      userId: req.body.userId,
    });
    if (deleteBookedVacation) {
      res.status(200).json({ message: "Booked Vacation Deleted Successfully" });
    } else {
      res.status(200).json({ message: "No Vacation found!" });
    }
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

module.exports = { BookedController };
