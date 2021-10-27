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

const todoList  = async (req, res) => {
    try {
const response = await ModelTodos.find({})
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error){
        res.status(500).send({message:error.message})
    }
}

const todoById  = async (req, res) => {
    const id = req.params.id
    try {
        Logger.http(`req.params.id: ${id}`)
        const response = await ModelTodos.findById(id)
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error){
        res.status(500).send({message:`Error occurred while retrieving Todo with id ${id}`,
            error: error.message})
    }
}





export default {
    createTodos,
    todoList,
    todoById
}