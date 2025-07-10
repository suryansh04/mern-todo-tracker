const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const taskRouter = require("./routes/taskRoutes");

const app = express();

app.use(express.json());
app.use(cors()); // allow all origins
app.use(morgan("dev"));

app.use("/api/tasks", taskRouter);

module.exports = app;
