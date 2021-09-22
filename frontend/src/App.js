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
function getProfiles(){
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

    return (
    <diiv>
<h2>Profile API with Axios</h2>
        <p>{text}</p>
        <button onClick={ () => {setText('New ID')}}>Profile User</button>
        <button onClick={alive}>Alive</button>
        <button onClick={getProfiles}>Check Profile</button>
        <button onClick={() => {getProfilesById(11)}}>Get Profile Id</button>
    </diiv>
  );
}

export default App;
