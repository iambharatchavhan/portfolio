const express = require("express");
const app = express();
const db = require('./config/database')

require("dotenv").config();

port = process.env.PORT;


app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the homepage</h1>`);
});



app.listen(port, () => {
  console.log(`app is running on port number ${port}`);
});


db.connect();