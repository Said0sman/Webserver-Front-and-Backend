import ControllerTodos from "../controller/ControllerTodos.js";

const routes = (app) => {
    const todosUrl = '/getTodos'

    app.port(todosUrl, ControllerTodos.createTodos())
}

export default {
    routes
}