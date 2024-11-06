const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  status: { type: String, enum: ["pending", "complete"], default: "pending" },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
