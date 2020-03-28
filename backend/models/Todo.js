const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Todos", TodoSchema);
