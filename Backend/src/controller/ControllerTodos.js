import ModelTodos from "../models/ModelTodos.js";
import Logger from "../utils/Logger.js";

//Create Todos in the List
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

//Find Todos List
const todoList  = async (req, res) => {
    try {
const response = await ModelTodos.find({})
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error){
        res.status(500).send({message:error.message})
    }
}

//Get Todos By the Id
const todoById  = async (req, res) => {
    const id = req.params.id
    try {
        Logger.http(`req.params.id: ${id}`)
        const response = await ModelTodos.findById(id)
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error){
        res.status(500).send({message:`Error occurred while retrieving Todos with id ${id}`,
            error: error.message})
    }
}

//Find Todos with Day
const findTodoByDay  = async (req, res) => {
    const todoDay = req.query.day
    try {
        Logger.http(`req.params.day: ${todoDay}`)
        const response = await ModelTodos.find({day: todoDay})
        Logger.debug(response)
        response.length !== 0
           ? res.status(200).send(response)
            :res.status(404).send(`Error no days found on todos: "${todoDay}"`)

    } catch (error){
        res.status(500).send({message:`Error occurred while retrieving Todos with day ${todoDay}`,
            error: error.message})
    }
}

//Update Todos in the List
const updateTodos = async (req, res) => {
    let todoId
    let body
    try {
        todoId = req.params.id
        body = req.body
        Logger.http(`todoId: ${todoId}`)
        Logger.http(`body: ${body}`)

        if(!body){
            res.status(400).send(`Cant update todo with empty values`)
        }
const response = await ModelTodos.findByIdAndUpdate(todoId, {
    text: req.body.text,
    day: req.body.day,
    time: req.body.time,
},{new: true})
   Logger.debug(response)
        response.length !== 0
            ? res.status(200).send(response)
            :res.status(404).send(`Cant find todo Id: "${todoId}"`)
    } catch (error){
        res.status(500).send({message:`Error occurred while trying to update todo with id ${todoId}`,
            error: error.message})
    }
}

//Delete Todos in the List
const deleteTodos = async (req,res) => {
    let todoId
    try{
        todoId = req.params.id
        Logger.http(todoId)
        const response = await ModelTodos.findByIdAndUpdate(todoId)
       Logger.debug(response)
        res.status(200).send(`You have now successfully delete todo in the list`)
    } catch (error){
        res.status(500).send({
            message:`Error occurred while trying to delete todo in list with id ${todoId}`,
            error: error.message
        })
    }
}




//Exports
export default {
    createTodos,
    todoList,
    todoById,
    findTodoByDay,
    updateTodos,
    deleteTodos
}