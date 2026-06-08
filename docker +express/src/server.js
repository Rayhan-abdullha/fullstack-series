const express = require("express");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://mongo:27017/todos")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
