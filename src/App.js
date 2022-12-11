
import './App.css';
import { useState } from "react";



function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  let doCalculation = (type) => {
    switch (type) {
      case "ADD":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "SUBTRACT":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "MULTIPLY":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "DIVISION":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
      default:
        throw new Error("Use valid operation");
    }
  };

  return (
    <div>
      <center>
      <h1>Welcome to Mini Calculator World</h1>
      <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <input
          type={"number"}
          className="sr-only"
          placeholder={"Enter 1st Number"}
          onChange={(e) => {
            setFirstNumber(e.target.value);
          }}
          value={firstNumber}
        />
        <input
          type={"number"}
          className="sr-only"
          placeholder={"Enter 2nd Number"}
          onChange={(e) => {
            setSecondNumber(e.target.value);
          }}
          value={secondNumber}
        />
        </div>
        
        <div>
        <br></br>
        <button class="btn btn-primary" onClick={() => doCalculation("ADD")}>Add</button>
        <br></br> <br></br><button class="btn btn-primary" onClick={() => doCalculation ("SUBTRACT")}>Subtract</button>
        <br></br><br></br><button class="btn btn-primary" onClick={() => doCalculation ("MULTIPLY")}>Multiply</button>
        <br></br> <br></br> <button class="btn btn-primary" onClick={() => doCalculation("DIVISION")}>Divide</button>
        <br></br><br></br> <h4 className='font-weight-bold'>Result is: {result} </h4>
        </div>
        <h1>Thank You For Using!</h1>
      </form>
      </center>
     
    </div>
  );
}

export default App;
