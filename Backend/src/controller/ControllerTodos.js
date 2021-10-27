import ModelTodos from "../models/ModelTodos.js";
import Logger from "../utils/Logger.js";


const createTodos = async (req, res) => {
    Logger.http(req.body)

    const todos = new ModelTodos({
        text: req.body.text,
        day: req.body.day,
        time: req.body.time,
    })
    Logger.debug(todos)

    try {
        const response = await todos.save()
        Logger.debug(response)
        res.status(200).send(response)
    }
    catch (error){
        res.status(500).send({message:error.message})
    }
}

const getTodoList  = async (req, res) => {
    try {
const response = await ModelTodos.find({})
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error){
        res.status(500).send({message:error.message})
    }
}



export default {
    createTodos,
    getTodoList
}