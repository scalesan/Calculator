import { useState } from "react";
const App = () => {
  const[myCalc, setMyCalc] = useState("")
  const[myResult, setMyresult] = useState("")
  const myOperators = ['/', '*', '+', '-', '.']
  const updateMyCalc = value => {
    if(myOperators.includes(value) && myCalc === "" ||
      myOperators.includes(value) && myOperators.includes(myCalc.slice(-1)))
     return
  setMyCalc(myCalc + value)
    if(!myOperators.includes(value)){
      setMyresult(eval(myCalc+value).toString());
    }
  }
  const createMyDigits = () => {
    const myDigits = [];
    for(let i=1; i<10; i++){
      myDigits.push(<button onClick={() => 
        updateMyCalc(i.toString())} key={i}>{i}</button>)
    }
    return myDigits 
  }
  const myCalculation = () =>{
    setMyCalc(eval(myCalc).toString());
  }
  return (
    <div className="App">
        <div className="myCalc">
          <div className="myDisplay">
            {myResult ? <span>({myResult})</span> : ''}{myCalc || "0"}
          </div>
          <div className = "myOperators">
            <button onClick={() => updateMyCalc('/')}>/</button>
            <button onClick={() => updateMyCalc('*')}>*</button>
            <button onClick={() => updateMyCalc('+')}>+</button>
            <button onClick={() => updateMyCalc('-')}>-</button>
            <button>DEL</button>
        </div>
        <div className="myDigits">
          {createMyDigits()}
          <button onClick={() => updateMyCalc('0')}>0</button>
          <button onClick={() => updateMyCalc('.')}>.</button>
          <button onClick={myCalculation}>=</button>
        </div>
    </div>
  </div>
  );
}

export default App;
