import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION

const TodoSchema = new mongoose.Schema({
    Text: String,
    Day: String,
    Time: Number
}, {
timestamps:true
})

const TodoModel = new mongoose.model(dbCollection, TodoSchema)

export default TodoModel
