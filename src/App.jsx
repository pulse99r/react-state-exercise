import './App.css'
import { useState } from 'react'
import Calculatator from './components/calculatator.jsx';

function App() {
  const [ count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 5)
  }
  const decrementCount = () => {
    setCount(count - 2)
  }
  return (
    <div className='App'>
      <h1 className='counter'>{count}</h1>
      <button onClick={incrementCount}>+5</button>
      <button onClick={decrementCount}>-2</button>
      <Calculatator /> 
    </div>
  )
}

export default App

