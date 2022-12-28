import './App.css';
import React,{useState} from 'react';

function App() {
  const [count,setCount]=useState(0)
  const event_handler=(()=>{
    setCount(count+1)
  })
  return (
    <div>
      <h1 className="App">{count}</h1>
      <center>
        <button onClick={event_handler}>Click</button>
      </center>
    </div>
  );
}

export default App;
