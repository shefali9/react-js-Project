import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = () => {
    // counter = counter + 1
    if(counter < 20) {
    setCounter(counter + 1);
    }


  }
  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value </button>
      <h1> footer: {counter} </h1>
    </>
  )
}

export default App
