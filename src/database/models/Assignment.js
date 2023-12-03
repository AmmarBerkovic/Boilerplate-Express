const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    default: "Missing",
  },
  topic: {
    type: String,
    trim: true,
    required: true,
    default: "Missing",
  },
  description: {
    type: String,
    trim: true,
    required: false,
  },
});

const Assignment = mongoose.model("assignments", AssignmentSchema);
module.exports = Assignment;
