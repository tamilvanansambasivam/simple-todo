const mongoose = require("mongoose");

const TodoModel = new mongoose.Schema({
  text: { type: String, required: true },
  status: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedBy: { type: String },
});

module.exports = mongoose.model("Todo", TodoModel);
