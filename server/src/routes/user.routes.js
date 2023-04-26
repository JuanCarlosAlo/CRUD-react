const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.get("/", controller.allUsers);
usersRoutes.get("/details:id", controller.userById);

module.exports = usersRoutes;
