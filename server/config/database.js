const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("connected to the database");

  } catch (error) {

    console.log("Error While connecting to the database");
    console.error(error.message);

  }
};
