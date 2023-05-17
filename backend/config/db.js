const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
const mongo_URI = process.env.mongo_URI;

const connect_Mongo = async () => {
  try {
    await mongoose.connect(mongo_URI);
    console.log(`Conneted to MongoDB`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
  }
};


module.exports = connect_Mongo;
