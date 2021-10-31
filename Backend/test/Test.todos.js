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


describe('Testing the TODO_API',  ()=> {
testIfRouteWorks()

})

