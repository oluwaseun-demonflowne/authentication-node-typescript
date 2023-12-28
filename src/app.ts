// require("dotenv").config();
import * as dotenv from "dotenv";
import express from "express";
import config from "config";

dotenv.config();
const app = express();
const port = config.get("port");

app.listen(port, () => [ 
  console.log(`App started at http://localhost:${port}`),
]);
