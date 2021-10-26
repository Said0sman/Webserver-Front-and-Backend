import ControllerTodos from "../controller/ControllerTodos.js";

const routes = (app) => {
    const todosUrl = '/getTodos'

    app.post(todosUrl, ControllerTodos.createTodos)
}

export default {
    routes
}
