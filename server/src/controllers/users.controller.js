const fs = require("fs");
const path = require("path");
const userFile = path.resolve(__dirname, "../../data/users.json");
const { v4 } = require("uuid");
const controller = {};

controller.allUsers = (req, res) => {
  fs.readFile(userFile, (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);

    res.send(jsonData);
  });
};

controller.userById = (req, res) => {
  console.log(req.params);
  fs.readFile(userFile, (err, data) => {
    const userParam = req.params.id;
    if (err) throw err;
    const jsonData = JSON.parse(data);
    const userDetails = jsonData.find((user) => user.userId === userParam);
    res.send(userDetails);
  });
};

controller.editId = (req, res) => {
  fs.readFile(userFile, (err, data) => {
    const id = req.params.id;
    const jsonData = JSON.parse(data);
    const newData = req.body;

    if (err) return res.status(500).send("Failed to read the user file");

    const userIndex = jsonData.findIndex((user) => user.userId === id);
    const userSelected = jsonData[userIndex];
    const newUserData = { ...userSelected, ...newData };
    if (userIndex === -1) return res.status(404).send("User not found");
    jsonData.splice(userIndex, 1, newUserData);

    fs.writeFile(userFile, JSON.stringify(jsonData), (err) => {
      if (err) throw err;
      res.send(jsonData);
    });
  });
};

controller.deleteId = (req, res) => {
  console.log(req.params);
  fs.readFile(userFile, (err, data) => {
    const id = req.params.id;

    const jsonData = JSON.parse(data);
    if (err) return res.status(500).send("Failed to read the user file");
    const deletedUser = jsonData.findIndex((user) => user.userId === id);
    if (deletedUser === -1) return res.status(404).send("User not found");
    jsonData.splice(deletedUser, 1);
    fs.writeFile(userFile, JSON.stringify(jsonData), (err) => {
      if (err) throw err;
      res.status(201).send("user deleted succesfully");
    });
  });
};

controller.createId = (req, res) => {
  fs.readFile(userFile, (err, data) => {
    const newData = req.body;
    const newUserData = { userId: v4(), ...newData };
    const jsonData = JSON.parse(data);
    if (err) return res.status(500).send("Failed to read the user file");
    jsonData.push(newUserData);
    fs.writeFile(userFile, JSON.stringify(jsonData), (err) => {
      if (err) throw err;
      res.send(jsonData);
    });
  });
};

module.exports = controller;
