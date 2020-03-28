const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Todos", TodoSchema);
