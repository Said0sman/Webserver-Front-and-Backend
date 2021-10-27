import ControllerTodos from "../controller/ControllerTodos.js";

const routes = (app) => {
    const todosUrl = '/Todos'
    const todoByIdUrl = `${todosUrl}/:id`


    app.post(todosUrl, ControllerTodos.createTodos)
    app.get(todosUrl, ControllerTodos.todoList)
    app.get(todoByIdUrl, ControllerTodos.todoById)
}




export default {
    routes
}
