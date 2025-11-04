import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
  //let counter=0;

  const addValue=()=>{
    /* counter=counter+1;
    console.log(counter); */ // Itr doesn't work like this React uses useState for this purpose.
    setCounter(counter+1);
    
  }
  const decreValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>React learning with Madhur.</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={decreValue}>Remove Value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
