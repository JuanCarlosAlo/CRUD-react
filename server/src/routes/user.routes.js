const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.get("/", controller.allUsers);

module.exports = usersRoutes;
