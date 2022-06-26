const express = require("express");

const { workingtime } = require("./custommiddlewar.js");
const app = express();
app.listen(3000);

app.get("/homepage", workingtime, (req, res, next) => {
  res.sendFile(__dirname + "/public/homepage.html");
});
app.get("/ourservices", workingtime, (req, res, next) => {
  res.sendFile(__dirname + "/public/ourservices.html");
});
app.get("/contactus", workingtime, (req, res, next) => {
  res.sendFile(__dirname + "/public/contactus.html");
});
