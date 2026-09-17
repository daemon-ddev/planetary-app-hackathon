const express = require("express");
const cors = require("cors");
const planetary_app_hackathonRouter = require("./routers/planetary_app_hackathon");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/planetary_app_hackathon", planetary_app_hackathonRouter);

module.exports = app;
