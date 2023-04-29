require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 4000;

const emailRoute = require("./routes/emailRoute");
const app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public")));
app.use("/emails", emailRoute);
app.get("/", async (req, res) => {
  try {
    res.status(200).json("BisResume Server, Up and Running");
  } catch (error) {
    console.log("error", error.message);
    res.status(200).json("BisResume Server, Up and error");
  }
});

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
