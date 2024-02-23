const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const TodoModel = mongoose.model("Todos", todoSchema);

module.exports = {
    TodoModel:TodoModel,
}