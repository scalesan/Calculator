const App = () => {
  const createMyDigits = () => {
    const myDigits = [];
    for(let i=1; i<10; i++){
      myDigits.push(
        <button key={i}>{i}</button>
      )
    }
    return myDigits
  }
  return (
    <div className="App">
        <div className="myCalc">
          <div className="myDisplay">
            <span>{0}</span>0
          </div>
        <div className = "myOperators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>

          <button>DEL</button>
        </div>
        <div className="myDigits">
          {createMyDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
    </div>
  </div>
  );
}

export default App;
