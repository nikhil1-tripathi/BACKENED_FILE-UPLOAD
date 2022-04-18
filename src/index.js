const express = require("express");


const userController = require("./controllers/user.controller")

const galleryController = require("./controllers/pic.controller");

const app = express();
app.use(express.json());

app.use("/user", userController)

app.use("/pics", galleryController);

module.exports = app;