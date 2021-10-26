import ModelTodos from "../models/ModelTodos.js";
import Logger from "../utils/Logger.js";


const createTodos = async (req,res) => {
    Logger.http(req.body)

}

export default {
    createTodos
}