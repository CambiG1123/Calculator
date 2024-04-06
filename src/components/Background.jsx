import React, { useEffect } from "react";
import Button from "./Button";
import InputOutput from "./InputOutput";
import Symbols from "./Symbols";
import { useState } from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".",'π' ];
const symbols = ["C", "CE", "+", "-", "*", "/", "x2",'√',"="];
const Background = () => {
//  state variables
  const [currentInput, setCurrentInput] = useState("0");
  const [newInput, setNewInput] = useState("0");
  const [prevInput, setPrevInput] = useState("0");
  const [operator, setOperator] = useState("");
  const [count, setCount] = useState(0);
 
  const handleInput = (inputValue) => {
    let incomingInput = "";
    if (inputValue === "π") {
      setCurrentInput(Math.PI.toString());
      setPrevInput(Math.PI.toString());
      return;
    }
    if (currentInput == "0" && operator == "") {
      
      setCurrentInput(inputValue);
      setPrevInput(inputValue);
    } else if (currentInput != "0" && operator == "") {
      incomingInput += currentInput;
      incomingInput += inputValue;
      setCurrentInput(incomingInput);
      setNewInput(incomingInput);
      setPrevInput(incomingInput);
    }
    if (newInput == "0" && operator != "") {
      // newInput += currentInput;

      incomingInput += inputValue;
      setCurrentInput(incomingInput);

      setNewInput(incomingInput);
    } else if (currentInput !== "0" && operator !== ""&& count >= 2) {
      // setCurrentInput("0");
      // incomingInput += currentInput;
      incomingInput += inputValue;
      setCurrentInput(incomingInput);
      setNewInput(incomingInput);
      
    }else if (currentInput !== "0" && operator !== "") { //when an operator button is clicked and a number has been clicked after
      // setCurrentInput("0");
      incomingInput += currentInput;
      incomingInput += inputValue;
      setCurrentInput(incomingInput);
      setNewInput(incomingInput);
    }
  };

  const handleSymbol = (type) => {
    if (type === "C") {
      setPrevInput(currentInput);
      setCurrentInput("0");
      setOperator("");
    } else if (type === "CE") {
      setCurrentInput("0");
      setPrevInput("0");
      setOperator("");
    } else if (type === "x2") {
      let square = parseFloat(currentInput) * parseFloat(currentInput);
      setCurrentInput(square.toString());
      setPrevInput(square.toString());
    } else if (type === '√'){
      let squareRoot = Math.sqrt(parseFloat(currentInput));
      setCurrentInput(squareRoot.toString());
      setPrevInput(squareRoot.toString());
    }
    else if (["+", "-", "*", "/",'√'].includes(type)) {
      setPrevInput(currentInput);
      setNewInput("0");
      setCount(count + 1);
      if (operator !== "") {
        
        // Perform the calculation based on the operator
        let result;
        switch (operator) {
          case "+":
            result = parseFloat(prevInput) + parseFloat(newInput);
            break;
          case "-":
            result = parseFloat(prevInput) - parseFloat(newInput);
            break;
          case "*":
            result = parseFloat(prevInput) * parseFloat(newInput);
            break;
          case "/":
            result = parseFloat(prevInput) / parseFloat(newInput);
            break;
         
          default:
            result = parseFloat(newInput);
        }
        setCurrentInput(result.toString());
        setPrevInput(result.toString());
      }
      setOperator(type);
    } else if (type === "=") {
      setCount(0)
      if (operator !== "") {
        let result;
        switch (operator) {
          case "+":
            result = parseFloat(prevInput) + parseFloat(newInput);
            break;
          case "-":
            result = parseFloat(prevInput) - parseFloat(newInput);
            break;
          case "*":
            result = parseFloat(prevInput) * parseFloat(newInput);
            break;
          case "/":
            result = parseFloat(prevInput) / parseFloat(newInput);
            break;
          default:
            result = parseFloat(newInput);
        }
        setCurrentInput(result.toString());
        setPrevInput("0");
        setOperator("");
      }
    }
  };

  useEffect(() => {
    console.log(currentInput, "currentInput");
    console.log(prevInput, "prevInput");
    console.log(operator, "operator");
    console.log(newInput, "newInput");
    console.log(count, "count")
  });
  return (
    <>
      <div className="absolute bg-slate-400 w-full h-full flex justify-center">
        <div className="absolute bg-slate-500 w-5/6 h-5/6 rounded-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col ">
          <InputOutput id="inputOutput" currentInput={currentInput} />
          <div id="button-container" className=" flex h-5/6 ">
            <div className="bg-red-50 w-4/6 h-6/6 ml-5 mt-5 mb-5 mr-3 rounded-3xl flex flex-row flex-wrap  p-2">
              {numbers.map((num, index) => (
                <Button
                  key={index}
                  handleInput={handleInput}
                  type={num}
                ></Button>
              ))}
            </div>

            <div
              id="symbol-container"
              className="bg-red-100 w-1/3 h-6/6 mt-5 mb-5 mr-5 rounded-3xl flex flex-wrap justify-around p-2"
            >
              {symbols.map((sym, index) => (
                <Symbols
                  key={index}
                  type={sym}
                  handleSymbol={handleSymbol}
                ></Symbols>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;