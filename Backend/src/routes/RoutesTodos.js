import ControllerTodos from "../controller/ControllerTodos.js";

const routes = (app) => {
    const todosUrl = '/Todos'
    const todoByIdUrl = `${todosUrl}/:id`
    const findByDay = '/findByDay'


    app.post(todosUrl, ControllerTodos.createTodos)
    app.get(todosUrl, ControllerTodos.todoList)
    app.get(todoByIdUrl, ControllerTodos.todoById)
    app.get(findByDay, ControllerTodos.findTodoByDay)
    app.put(todoByIdUrl, ControllerTodos.updateTodos)
    app.delete(todoByIdUrl, ControllerTodos.deleteTodos)
}




export default {
    routes
}
