import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION

const TodoSchema = new mongoose.Schema({
    text: String,
    day: String,
    time: String
}, {
timestamps:true
})

const ModelTodos = new mongoose.model(dbCollection,TodoSchema)

export default ModelTodos

