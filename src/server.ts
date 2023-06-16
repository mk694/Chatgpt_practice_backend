import { Request, Response, NextFunction } from "express";
import express from "express";
var bodyParser = require("body-parser");
const app = express();
import { getAPIDATA } from "./controllers/chatGpt";
require("dotenv").config();

app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.post("/gpt", getAPIDATA);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
  console.log("working");
});

// Start the server
const port  = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${ port}`);
});
