const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err });
  }
});

// add new todo to database
router.post("/", async (req, res) => {
  const todo = new Todo({
    id: req.body.id,
    description: req.body.description,
    done: false
  });

  try {
    const savedTodo = await todo.save();
    res.json({ status: 200, message: savedTodo });
  } catch (err) {
    res.json({ message: err });
  }
});

// find todo by id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json({ status: 200, todo });
  } catch (err) {
    res.json({ message: err });
  }
});

// delete a todo by id
router.delete("/:id", async (req, res) => {
  try {
    const removedTodo = await Todo.remove({ id: req.params.id });
    res.json({ status: 200, removedTodo });
  } catch (err) {
    res.json({ message: err });
  }
});

// update a todo
router.patch("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { id: req.params.id },
      { $set: { description: req.body.description, done: req.body.done } }
    );
    res.json({ status: 200, message: updatedTodo });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
