import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

let newId = 14

function incrementIdByOne(){
    newId += 1
}


function newProfile(userData) {
    let user = {
        id: newId,
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
    }
    incrementIdByOne()
    myNewDatabase.push(user)
}
function deleteProfile(index){
    myNewDatabase.splice(index,1)
}

function updateProfile(userData){
let index = getProfileIndex(userData.id)
   if (index === -1){
       return {
           status: 400,
           text: 'Profile not found'
       }
   }
   else{

    if (myNewDatabase[index].name !== userData.name) {
        myNewDatabase[index].name = userData.name;
    }
    if (myNewDatabase[index].age !== userData.age) {
        myNewDatabase[index].age = userData.age
    }
    if (myNewDatabase[index].gender !== userData.gender) {
        myNewDatabase[index].gender = userData.gender
    }
         return {
                status: 200,
                text: "Profile is updated!"
            }
        }

}

function getProfileIndex(id){
    for (let i = 0; i < myNewDatabase.length; i++)
        if (myNewDatabase[i].id === id) {
            return i
        }
    return -1
}

let myNewDatabase = [
    {
        id: 10,
        name: 'Alison Field',
        age: 55,
        gender: 'Male',
    },
    {
        id: 11,
        name: 'Gibson Field',
        age: 45,
        gender: 'Male',
    },
    {
        id: 12,
        name: 'Jenison Field',
        age: 35,
        gender: 'Female',
    },
    {
        id: 13,
        name: 'Tarason Field',
        age: 25,
        gender: 'Female',
    },
]

function getProfileById(id){
let index = getProfileIndex(id)
    if (index === -1){
        return {
            status: 400,
            text: 'Profile not found'
        }
    } else {
        return {
            status: 200,
            text: myNewDatabase[index]
        }
    }
}

function deleteProfileById(id){
    let index = getProfileIndex(id)
    if (index === -1){
        return {
            status: 400,
            text: 'Profile not found'
        }
    } else {
       deleteProfile(index)
        return {
            status: 200,
            text: 'Profile deleted!'
        }
    }
}

app.get('/', function (req, res){
    res.send('API is Alive!')
})

app.get('/users', function (req, res){
    res.json(myNewDatabase)
})

app.get('/users/:id', function (req, res){
    let response = getProfileById(Number(req.params.id))
    res.status(response.status).json(response.text)
})


app.post('/users', function (req, res){
    newProfile(req.body)
    res.json('You have created a new profile')
})



app.put('/users', function (req, res){
 let response = updateProfile(req.body)
    res.status(response.status).send(response.text)
})

app.delete('/users/:id', function (req, res){
    let response = deleteProfileById(Number(req.params.id))
    res.status(response.status).json(response.text)
})


app.listen(3000,  () => {
    console.log(`Server is running on port 3000`)
})