import ControllerTodos from "../controller/ControllerTodos.js";

const routes = (app) => {
    const todosUrl = '/Todos'


    app.post(todosUrl, ControllerTodos.createTodos)
    app.get(todosUrl, ControllerTodos.getTodoList)
}




export default {
    routes
}
