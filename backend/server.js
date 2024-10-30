// const express = require("express"); <- traditional
import express from "express"; //<- modern (add "type": "module", in package.json)
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
  // res.send("data.products");
});

// console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 ");
});
