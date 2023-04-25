const fs = require("fs");
const path = require("path");
const userFile = path.resolve(__dirname, "../../data/users.json");
const { v4 } = require("uuid");
const controller = {};

controller.allUsers = (req, res) => {
  fs.readFile(userFile, (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    res.send(jsonData);
  });
};

module.exports = controller;
