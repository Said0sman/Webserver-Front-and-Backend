import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import app from "../src/Server.js"

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
let myTodoId = '617943c7542fec4485f31998'
const todo = {
    text: randomString,
    day: randomString,
}

const todosRoute = '/Todos'
const todosRouteId = `${todosRoute}/:myTodosId`
const findByDayRoute = '/findByDay'


const testIfRouteWorks = () => {
    describe('Test a route that does not exist', () => {
        test('Expecting 404 not found', (done) => {
            Chai.request(app)
                .get(`/${ randomString }`)
                .end((request, response) => {
                    response.should.have.a.status(404)
                    done()
                })
        })
    })
}
const testTodoList = () => {
    describe('Test if GET is accessing to todo list', () => {
        test('Expecting to return all in the todoList', (done) => {
            Chai.request(app)
                .get(todosRoute)
                .end((error, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('Array')
                    response.body.length.should.be.eq(response.body.length)
                    done()
                })
        })
    })
}

const testUpdateTodos = () => {
    describe('Test if PUT is updating and working correctly', () => {
        test('Expecting to update a todo with a valid ID', (done) => {
            Chai.request(app)
                .put(`${todosRoute}/${myTodoId}`)
                .send(todo)
                .end((error, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id').eq(myTodoId)
                    response.body.should.have.property('text').eq(todo.text)
                    response.body.should.have.property('day').eq(todo.day)
                    done()
                })
        })
    })
}
const testCreateTodo = () => {
    describe('Test if POST is creating and working correctly', () => {
        test('Expecting to create a todo', (done) => {
            Chai.request(app)
                .post(todosRoute)
                .send(todo)
                .end((error, response) => {
                    response.should.have.a.status(200)
                    response.body.should.be.a('object')
                    myTodoId = response.body._id
                    response.body.should.have.property('text').eq(todo.text)
                    response.body.should.have.property('day').eq(todo.day)
                    done()
                })
        })
    })
}

const testDeleteTodos = () => {
    describe('Test if Delete is working correctly', () => {
        test('Expecting to delete with Id in the todo list', (done) => {
            Chai.request(app)
                .delete(`${todosRoute}/${myTodoId}`)
                .end((error, response) => {
                    response.should.have.status(200)
                    done()
                })
        })
    })
}


describe('Testing the TODO_API',  ()=> {
testIfRouteWorks()
testTodoList()
testUpdateTodos()
testCreateTodo()
testDeleteTodos()
})

