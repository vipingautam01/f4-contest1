import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./Calculator.css";


const Calculator = () => {

    let [num1, setNum1] = useState("");
    let [num2, setNum2] = useState("");

    let [status, setstatus] = useState("");
    let [msg, setMsg] = useState("");

    let [className, setClassName] = useState("");

    const pattern = /^[+]?\d+(\.\d+)?$|^-?\d+(\.\d+)?$/;

    function removeStatusAndMsg(){
        setstatus("");
        setMsg("");
    }


    function validateAndCalculate(operation){
        if(pattern.test(num1) === true && pattern.test(num2) === true){
  
            setstatus("Success!");
            setClassName("green");

            let ans = "";

            switch(operation){
                case "add":
                    ans = parseFloat(num1) + parseFloat(num2);
                    setMsg(`Result : ${ans}`);                   
                    break;

                case "sub":
                    ans = parseFloat(num1) - parseFloat(num2);
                    setMsg(`Result : ${ans}`);                   
                    break;

                case "mul":
                    ans = parseFloat(num1) * parseFloat(num2);
                    setMsg(`Result : ${ans}`);                   
                    break;

                case "div":
                    ans = parseFloat(num1) / parseFloat(num2);
                    setMsg(`Result : ${ans}`);                   
                    break;

                default:
                    break;
            }

            


            
        }else{
    
            setstatus("Error!");
            setMsg("Enter valid Number");
            setClassName("red");

            let num1Ele = document.getElementById("num-1");
            let num2Ele = document.getElementById("num-2");

            num1Ele.value = "";            
            num2Ele.value = "";

            

           
        }
    }

    return (
        <div className="calc-cont">
            <input type = "text" placeholder="Enter first Number" className="input" onChange={(event) => setNum1(event.target.value)} onFocus = {removeStatusAndMsg} id = "num-1"/>
            <input type = "text" placeholder = "Enter second Number" className="input" onChange={(event) => setNum2(event.target.value)} onFocus = {removeStatusAndMsg} id = "num-2"/>

            <div className="button-cont">
                <button className="button" onClick={() => validateAndCalculate('add')}> + </button>
                <button className="button" onClick={() => validateAndCalculate('sub')}> - </button>
                <button className="button" onClick={() => validateAndCalculate('mul')}> * </button>
                <button className="button" onClick={() => validateAndCalculate('div')}> / </button>
            </div>

            <p className = {className}>{status}</p>

            <div className="msg-cont">
                <p className="msg">{msg}</p>
            </div>

        </div>
    )
}

export default Calculator