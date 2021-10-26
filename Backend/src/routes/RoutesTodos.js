import ControllerTodos from "../controller/ControllerTodos.js";

const routes = (app) => {
    const todosUrl = '/createdTodos'

    app.post(todosUrl, ControllerTodos.createTodos)
}


export default {
    routes
}
