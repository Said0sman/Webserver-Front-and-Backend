import './App.css';
import {useState} from "react";
import http from  './utils/api/ProfileApi'

function App() {
  const [text, setText] = useState('API is Alive with Frontend')
function alive() {
      http.get('/')
          .then(function (res){
              console.log(res)
          }).catch(function (error){
              //catch the error
              console.log(error)
          return 'Error'
      }).then(function (){
          //will always run
      })
}

    return (
    <diiv>
<h2>Profile API with Axios</h2>
        <p>{text}</p>
        <button onClick={ () => {setText('New ID')}}>Profile User</button>
        <button onClick={alive}>Alive</button>
    </diiv>
  );
}

export default App;
