import './App.css';
import {useState} from "react";
import http from  './utils/api/ProfileApi'
import { JsonToTable} from "react-json-to-table";


function App(){

 const [text, setText] = useState('Frontend API is alive ')
    const [viewProfile, setViewProfile] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [id, setId] = useState(0)


    function alive() {
      http.get('/')
          .then(function (res){
              console.log(res.data)
          }).catch(function (error){
              //catch the error
              console.log(error)
          return 'Error'
      }).then(function (){
          //will always run
      })
}
function getProfile(){
      http.get('/users').then(function (res){
          console.log(res.data)
          setViewProfile(res.data)
      }).catch(function (error){
          console.log(error)
      })
}
function getProfilesById(myId){
        http.get(`/users/${ myId }` ).then(function (res){
            console.log(res.data)
            viewProfile(res.data)
        }).catch(function (error){
            console.log(error)
        })
    }
function createNewProfile(myName,myAge,myGender){
      const payload  ={
          "name": myName,
          "age": myAge,
          "gender": myGender
      }
      http.post('/users',payload).then(function (res){
          console.log(res.data)
    }).catch(function (error){
        console.log(error)
      })
}
function updateProfile(myId,myName,myAge,myGender){
     const payload  ={
            "id": myId,
            "name": myName,
            "age": myAge,
            "gender": myGender
        }
        http.put('/users',payload).then(function (res){
            console.log(res.data)
        }).catch(function (error){
            console.log(error)
        })
    }
    function deleteProfileById(myId){
        http.delete(`/users/${ myId }` ).then(function (res){
            console.log(res.data)
        }).catch(function (error){
            console.log(error)
        })
    }

 return (

        <div>
            <div>
                    <h2>Profile API with Axios</h2>
                    <p>{text}</p>
                    <button onClick={ () => {setText('New ID')}}>Profile User</button>
                    <button onClick={alive}>Alive</button>
                    <button onClick={getProfile}>Check Profile</button>
                    <button onClick={() => {getProfilesById(11)}}>Get Profile Id</button>
                    <button onClick={() => {createNewProfile( 'Alison Field', 55, 'Male')}
                    }>Create New Profile</button>
                    <button onClick={() => {updateProfile( 22,'Wilson Field', 65, 'Male')}
                    }>Update Profile</button>
                    <button onClick={() => {deleteProfileById(14)}}>Delete Profile</button>
            </div>
            <div>
 <section>
    <h4>Get Profile List </h4>
    <button onClick={getProfile}>Get Profiles</button>
   <br/>
    <JsonToTable  json={viewProfile}/>
</section>
                <section>
                    <h4>Create New Profile</h4>
                    Name:<input type= 'text' id= 'name' onChange={event => setName(event.target.value)}/><br/>
                    Age:<input type= 'number' min={0} id= 'age' onChange={event => setAge(event.target.value)}/><br/>
                    Gender:<input type= 'text' id= 'gender' onChange={event => setGender(event.target.value)}/><br/>
                <button onClick={() =>{createNewProfile(name,age,gender)}}>Get Profile</button>
                </section>

                <section>
                    <h4>Update Profile</h4>
                    Id:<input type= 'number'  min={0} id= 'name' value={id}
                              onChange={event => setId(event.target.value)}/><br/>
                    Name:<input type= 'text' id= 'name' value={name}
                                onChange={event => setName(event.target.value)}/><br/>
                    Age:<input type= 'number' min={0} id= 'age' value={age}
                               onChange={event => setAge(event.target.value)}/><br/>
                    Gender:<input type= 'text' id= 'gender' value={gender}
                                  onChange={event => setGender(event.target.value)}/><br/>
                    <button onClick={() =>{updateProfile(id,name,age,gender)}}>Update Profile</button>
                </section>
                <section>
                    <h4>Delete Profile</h4>
                    Id:<input type= 'number'  min={0} id= 'name' value={id}
                              onChange={event => setId(event.target.value)}/><br/>
                    <br/>
                    <button onClick={() =>{deleteProfileById(id)}}>Delete Profile</button>
                </section>
            </div>

    </div>
  );
}

export default App;
