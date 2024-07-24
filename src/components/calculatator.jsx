import { useState } from "react";
import "./calculatator.css"

const Calculatator = () => {
  const [calcResults, setCalcResults] = useState(0);
  const [ inputVal, setInputVal] = useState(0)
  
  const add = () => {
    setInputVal()
    setCalcResults(calcResults + num)
  }

  const getVal = (num) => {

  }
  const subtract = (num) => {

  }
  const multiply = (num) => {

  }
  const divide = (num) => {

  }
  return (
    <div className="calc-container">
      <input className="input-val"></input>
      <div className="calcBtns">
        <button onClick={getVal}value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button value="4">4</button>
        <button value="5">5</button>
        <button value="6">6</button>
        <button value="7">7</button>
        <button value="8">8</button>
        <button value="9">9</button>
        <button value="0">0</button>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>

      </div>
    </div>
  )
}


export default Calculatator
