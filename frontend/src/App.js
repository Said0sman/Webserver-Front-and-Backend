import './App.css';
import {useState} from "react";
import http from  './utils/api/ProfileApi'

function App() {
  const [text, setText] = useState('Frontend API is alive ')
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
      }).catch(function (error){
          console.log(error)
      })
}
function getProfilesById(id){
        http.get(`/users/${ id }` ).then(function (res){
            console.log(res.data)
        }).catch(function (error){
            console.log(error)
        })
    }
function createNewProfile(name,age,gender){
      const payload  ={
          "name": name,
          "age": age,
          "gender": gender
      }
      http.post('/users',payload).then(function (res){
          console.log(res.data)
    }).catch(function (error){
        console.log(error)
      })
}
function updateProfile(id,name,age,gender){
        const payload  ={
            "id": id,
            "name": name,
            "age": age,
            "gender": gender
        }
        http.put('/users',payload).then(function (res){
            console.log(res.data)
        }).catch(function (error){
            console.log(error)
        })
    }
    function deleteProfileById(id){
        http.delete(`/users/${ id }` ).then(function (res){
            console.log(res.data)
        }).catch(function (error){
            console.log(error)
        })
    }


    return (
    <diiv>
<h2>Profile API with Axios</h2>
        <p>{text}</p>
        <button onClick={ () => {setText('New ID')}}>Profile User</button>
        <button onClick={alive}>Alive</button>
        <button onClick={getProfile}>Check Profile</button>
        <button onClick={() => {getProfilesById(11)}}>Get Profile Id</button>
        <button onClick={() => {createNewProfile( 'Alison Field', 55, 'Male')}}>Create New Profile</button>
        <button onClick={() => {updateProfile( 22,'Wilson Field', 65, 'Male')}}>Update Profile</button>
        <button onClick={() => {deleteProfileById(14)}}>Delete Profile</button>


    </diiv>
  );
}

export default App;
