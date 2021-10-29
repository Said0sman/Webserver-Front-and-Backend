import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import app from "../src/Server.js"

Chai.should()
Chai.use(ChaiHTTP)
// Test for Existing
const testingNonExistingRoute = () => {
    describe('Test a route that does not exist', () => {
        test('Expecting 404 not found', (done) => {
            Chai.request(app)
                .get('/randomURL')
                .end((request, response) => {
                    response.should.have.a.status(404)
                    done()
                })
        })
    })
}

//Exports
describe('TESTING THE TODOS_API ROUTE', () => {
    testingNonExistingRoute()
})