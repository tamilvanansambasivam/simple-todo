const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
require("./src/config/db");
const Todo = require("./src/models/todo");

const app = express();

app.get("/", (req, res) => {
  res.send("simple todo app");
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(201).json(todos);
  } catch (error) {
    console.error(error);
  }
});

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { text, createdBy } = req.body;
    const todo = new Todo({
      text,
      createdBy,
      updatedBy: createdBy,
    });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.log(error);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { text } = req.body;
    const filter = { _id: req.params.id };
    const update = { text: text };

    const todo = await Todo.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true, // Make this update into an upsert
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error("error happen when updating : ", error);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.deleteOne(req.param.id);
    res.status(201).json(deletedTodo);
  } catch (error) {
    console.error("error happen when deleting : ", error);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
