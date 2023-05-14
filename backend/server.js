const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome !");
});

app.listen(PORT, async () => {
  try {
    // await connectMongo();
    console.log(`Running at PORT: ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
