const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {});

app.listen(process.env.PORT || 3000, () => {
   console.log("Server started");
});
