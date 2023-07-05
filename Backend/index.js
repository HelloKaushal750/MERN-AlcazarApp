const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db");
const { UserController } = require("./controllers/Users.controller");
const { VacationController } = require("./controllers/Vacations.controller");
const { authenticate } = require("./middleware/authenticate");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/", UserController);

app.use(authenticate);

app.use("/vacation", VacationController);

connection.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Connected to Database");
  });
});
