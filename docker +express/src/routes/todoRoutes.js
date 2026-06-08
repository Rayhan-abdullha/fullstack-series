const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
});

// Get All
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

module.exports = router;
