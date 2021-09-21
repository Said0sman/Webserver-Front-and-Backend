import './App.css';
import {useState} from "react";

function App() {
  const [text, setText] = useState('API is Alive')

    return (
    <diiv>
<h2>Profile API with Axios</h2>
        <p>{text}</p>
        <button onClick={ () => {setText('New ID')}}>Profile User</button>
    </diiv>
  );
}

export default App;
