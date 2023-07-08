const express = require("express");
const { VacationModel } = require("../models/Vacations.model");

const VacationController = express.Router();

VacationController.get("/", async (req, res) => {
  try {
    if (req.query.page || req.query.search) {
      const page = parseInt(req.query.page) || 1;
      const limit = 6;
      const search = req.query.search;

      const filter = {};

      if (search) {
        filter.location = { $regex: search, $options: "i" };
        console.log(filter);
      }

      try {
        const data = await VacationModel.find(filter)
          .skip((page - 1) * limit)
          .limit(limit);
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
        console.log(error);
      }
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

VacationController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vacation = await VacationModel.findOne({ _id: id });
    res.status(200).json(vacation)
  } catch (error) {
    res.send({ message: "Something went wrong" });
  }
});

VacationController.post("/", async (req, res) => {
  try {
    const { image, location, price, description, category } = req.body;
    const vacation = new VacationModel({
      image,
      location,
      price,
      description,
      category,
    });
    await vacation.save();
    res.status(200).json({ message: "vacation Data Created" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
});

module.exports = { VacationController };
