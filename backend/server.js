const express = require("express");
const connectMongo = require("./config/db");
const userRouter = require("./routes/user.route")
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const {chats} = require("./data/data")
const colors = require("colors");

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

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.use('/api/user', userRouter);

app.listen(PORT, async () => {
  try {
    await connectMongo();
    console.log(`Running at PORT: ${PORT}`.yellow.bold);
  } catch (error) {
    console.log(error);
  }
});
