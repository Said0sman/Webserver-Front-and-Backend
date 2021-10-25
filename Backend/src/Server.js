import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Logger from "./utils/Logger.js";

dotenv.config()
const app = express();
const port = process.env.PORT
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME
const dbCollection = process.env.MONGODB_COLLECTION

app.use(cors({
    origin: '*',
    //methods: ['GET','POST'. 'DELETE', 'PUT']
}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

let newId = 14

function incrementIdByOne(){
    newId += 1
}


function newTodos(userData) {
    let user = {
        id: newId,
        text: userData.text,
        day: userData.day,
        time: userData.time,
    }
    incrementIdByOne()
    myNewDatabase.push(user)
}
function deleteTodos(index){
    myNewDatabase.splice(index,1)
}

function updateTodos(userData){
let index = getTodosIndex(Number(userData.id))
   if (index === -1){
       return {
           status: 400,
           text: 'Sorry nothing is added to the your list'
       }
   }
   else{

    if (myNewDatabase[index].text !== userData.text) {
        myNewDatabase[index].text = userData.text;
    }
    if (myNewDatabase[index].day !== userData.day) {
        myNewDatabase[index].day = userData.day
    }
    if (myNewDatabase[index].time !== userData.time) {
        myNewDatabase[index].time = userData.time
    }
         return {
                status: 200,
                text: "List is now updated!"
            }
        }

}

function getTodosIndex(id){
    for (let i = 0; i < myNewDatabase.length; i++)
        if (myNewDatabase[i].id === id) {
            return i
        }
    return -1
}

let myNewDatabase = [
    {
        id: 10,
        text: 'Im going to be training on',
        day: 'Friday',
        time: '17.00',
    },
    {
        id: 11,
        text: 'I will see you at work on',
        day:  'Monday',
        time: '10.00',
    },
    {
        id: 12,
        text: 'Im taking off this weekend and go for a trip',
        day: 'Saturday',
        time: '12.00',
    },
    {
        id: 13,
        text: 'Yes, we can book time for meeting on',
        day: 'Thursday',
        time: '20.00',
    },
]

function getTodosById(id){
let index = getTodosIndex(id)
    if (index === -1){
        return {
            status: 400,
            text: 'Sorry nothing is added to the your list'
        }
    } else {
        return {
            status: 200,
            text: myNewDatabase[index]
        }
    }
}

function deleteTodosById(id){
    let index = getTodosIndex(id)
    if (index === -1){
        return {
            status: 400,
            text: 'Sorry nothing is deleted from your list'
        }
    } else {
       deleteTodos(index)
        return {
            status: 200,
            text: 'You have deleted from your list'
        }
    }
}

app.get('/', function (req, res){
    res.send('Backend API is alive !')
})
//getProfile
app.get('/getTodos', function (req, res){
    res.json(myNewDatabase)
})
//checkProfile/:id
app.get('/myTodos/:id', function (req, res){
    let response = getTodosById(Number(req.params.id))
    res.status(response.status).json(response.text)
})

//createProfile
app.post('/createTodos', function (req, res){
    newTodos(req.body)
    res.json('You have created Todo on the list')
})


//updateProfile
app.put('/updateTodos', function (req, res){
 let response = updateTodos(req.body)
    res.status(response.status).send(response.text)
})
//deleteProfile
app.delete('/deleteTodos/:id', function (req, res){
    let response = deleteTodosById(Number(req.params.id))
    res.status(response.status).json(response.text)
})


app.listen(3001,  () => {
    console.log(`Server is running on port 3001`)
    Logger.info(`Server is running http://localhost:${port}`)
})
