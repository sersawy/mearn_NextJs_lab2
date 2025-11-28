import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    defaut: "todo",
    enum: ["todo", "in progress", "completed"],
  },
});
// todos

export const todoModel =
  mongoose.models.Todo || mongoose.model("Todo", todoSchema);
