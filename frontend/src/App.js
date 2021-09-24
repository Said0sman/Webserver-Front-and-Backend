import './App.css';
import {useState} from "react";
import http from  './utils/api/ProfileApi'
import { JsonToTable} from "react-json-to-table";


function App(){
    const style = {
        backgroundColor: " #EDF6F3",
        color: "Darkblue",
    };
const buttons = {
    color:  " #3E5D66"
}


    const [viewProfile, setViewProfile] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [id, setId] = useState(0)



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
          alert("You have created a new profile!");
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
            alert("Profile is updated!");
        }).catch(function (error){
            console.log(error)
        })
    }
    function deleteProfileById(myId){
        http.delete(`/users/${ myId }` ).then(function (res){
            console.log(res.data)
            alert("Profile deleted");
        }).catch(function (error){
            console.log(error)
        })
    }

 return (

        <div style={style}>

            <div>
 <section>
    <h3>Profile List </h3>
    <button style={buttons} onClick={getProfile}>View Profile</button>
   <br/>
    <JsonToTable  json={viewProfile}/>
</section>
                <section>
                    <h4>New Profile</h4>
                    Name:<input type= 'text' id= 'name' onChange={event => setName(event.target.value)}/><br/>
                    Age:<input type= 'number' min={0} id= 'age' onChange={event => setAge(event.target.value)}/><br/>
                    Gender:<input type= 'text' id= 'gender' onChange={event => setGender(event.target.value)}/><br/>
                <button style={buttons} onClick={() =>{createNewProfile(name,age,gender)}}>Create</button>
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
                    <button style={buttons} onClick={() =>{updateProfile(id,name,age,gender)}}>Update</button>
                </section>
                <section>
                    <h4>Delete Profile</h4>
                    Id:<input type= 'number'  min={0} id= 'name' value={id}
                              onChange={event => setId(event.target.value)}/><br/>
                    <button style={buttons} onClick={() =>{deleteProfileById(id)}}>Delete</button>
                </section>
            </div>

    </div>
  );
}

export default App;
