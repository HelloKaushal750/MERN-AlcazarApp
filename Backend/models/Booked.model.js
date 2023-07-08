const mongoose = require("mongoose");

const BookedSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: Number, required: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
  tickets: { type: String, required: true },
  pricewithpassengers: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },
});

const BookedModel = mongoose.model("booked_vacation", BookedSchema);

module.exports = { BookedModel };
