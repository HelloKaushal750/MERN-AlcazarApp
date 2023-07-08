const mongoose = require("mongoose");

const VacationSchema = mongoose.Schema({
  image: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    default: "customer",
    enum: ["customer","admin"],
  }
});

const VacationModel = mongoose.model("vacations", VacationSchema);

module.exports = { VacationModel };
