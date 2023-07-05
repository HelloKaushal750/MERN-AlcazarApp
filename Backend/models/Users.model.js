const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };
