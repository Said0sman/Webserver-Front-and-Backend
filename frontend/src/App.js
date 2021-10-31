import './App.css';
import {useState} from "react";
import http from  './utils/api/ProfileApi'
import { JsonToTable} from "react-json-to-table";


function App(){
    const style = {
        backgroundColor: " #EDF6F3",
        color: "Darkblue",
        padding: "10px",
    };
const buttons = {
    color:  " #3E5D66"
}


    const [viewTodos, setViewTodos] = useState()
    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [time, setTime] = useState()
    const [id, setId] = useState(0)



function getTodos(){
      http.get('/getTodos').then(function (res){
          console.log(res.data)
          setViewTodos(res.data)
      }).catch(function (error){
          console.log(error)
      })
}
function getTodosById(myId){
        http.get(`/myTodos/${ myId }` ).then(function (res){
            console.log(res.data)
            viewTodos(res.data)
        }).catch(function (error){
            console.log(error)
        })
    }
function createNewTodos(myText,myDay,myTime){
      const payload  ={
          "text": myText,
          "day": myDay,
          "time": myTime
      }
      http.post('/Todos',payload).then(function (res){
          console.log(res.data)
          alert("You have created Todo on the list'!");
    }).catch(function (error){
        console.log(error)
      })
}
function updateTodos(myId,myText,myDay,myTime){
     const payload  ={
            "id": myId,
            "text": myText,
            "day": myDay,
            "time": myTime
        }
        http.put('/updateTodos',payload).then(function (res){
            console.log(res.data)
            alert("List is now updated!");
        }).catch(function (error){
            console.log(error)
        })
    }
    function deleteTodosById(myId){
        http.delete(`/deleteTodos/${ myId }` ).then(function (res){
            console.log(res.data)
            alert("You have deleted from your list!");
        }).catch(function (error){
            console.log(error)
        })
    }

 return (

        <div style={style}>

            <div>
 <section>
    <h3>T0D0 List </h3>
    <button style={buttons} onClick={getTodos}>View List</button>
   <br/>
    <JsonToTable  json={viewTodos}/>
</section>
                <section>
                    <h4>Add T0D0 in List</h4>
                    T0D0:<input type= 'text' id= 'text' onChange={event => setText(event.target.value)}/><br/>
                    Day:<input type= 'text'  id= 'day' onChange={event => setDay(event.target.value)}/><br/>
                    Time:<input type= 'number' min={0} id= 'time' onChange={event => setTime(event.target.value)}/><br/>
                <button style={buttons} onClick={() =>{createNewTodos(text,day,time)}}>Add</button>
                </section>

                <section>
                    <h4>Update T0D0 in List</h4>
                    Id:<input type= 'number'  min={0} id= 'name' value={id}
                              onChange={event => setId(event.target.value)}/><br/>
                    T0D0:<input type= 'text' id= 'text' value={text}
                                onChange={event => setText(event.target.value)}/><br/>
                    Day:<input type= 'text'  id= 'day' value={day}
                               onChange={event => setDay(event.target.value)}/><br/>
                    Time:<input type= 'number' min={0} id= 'time' value={time}
                                  onChange={event => setTime(event.target.value)}/><br/>
                    <button style={buttons} onClick={() =>{updateTodos(id,text,day,time)}}>Update</button>
                </section>
                <section>
                    <h4>Delete T0D0 in List</h4>
                    Id:<input type= 'number'  min={0} id= 'name' value={id}
                              onChange={event => setId(event.target.value)}/><br/>
                    <button style={buttons} onClick={() =>{deleteTodosById(id)}}>Delete</button>
                </section>
            </div>

    </div>
  );
}

export default App;
