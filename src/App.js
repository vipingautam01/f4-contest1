import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Calculator from "./Components/Calculator.js";



const App = () => {

  return(
    <div className="root">

    
      <div className="card">
        <h1>React Calculator</h1>
        <Calculator/>
      </div>

    </div>
  )
  
}

export default App;
