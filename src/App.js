import './App.css';
import React, { useState } from 'react';
import Tilt from 'react-vanilla-tilt';


function App() {

 const [calc, SetCalc] = useState('');
 const [result, SetResult] = useState('');

 const operators = ['/', '*', '+', '-', '.'];

 const updateCalc = value => {
  if (operators.includes(value) && calc === '' || operators.includes(value) && operators.includes(calc.slice(-1))) {
   return;
  }

  SetCalc(calc + value);

  if (!operators.includes(value)) {
   SetResult(eval(calc + value).toString());
  }
 };

 const createDigits = () => {
  const digits = [];

  for (let i = 1; i < 10; i++) {
   digits.push(
    <span className="num" key={i} onClick={() => updateCalc(i.toString())}>{i}</span>
   );
  }
  return digits;
 };

 const calculate = () => {
  if (calc == '') {
   return;
  } else {
   SetCalc(eval(calc).toString());
  }
 };

 const deleteLast = () => {
  if (calc == '') {
   return;
  }

  const value = calc.slice(0, -1);
  SetCalc(value);
 };

 const clearInputField = () => {
  SetCalc('');
 };

 const handleEnterKey = (event) => {
  if (event.key == 'Enter') {
   console.log('the key was pressed');
   this.calculate();
  }
 };

 return (
  <Tilt className="tilt" options={{
   scale: 2, max: 25, glare: true,
   'max-glare': 1,
  }} >
   <div className="container">
    <div className="calculator">
     <div className="value">
      {calc || "0"}
     </div>
     <span className="num" onClick={deleteLast}>DEL</span>
     <span className="num" onClick={clearInputField}>CLEAR</span>
     <span className="num" onClick={() => updateCalc('/')}>/</span>
     <span className="num" onClick={() => updateCalc('*')}>*</span>
     <span className="num" onClick={() => updateCalc('+')}>+</span>
     <span className="num" onClick={() => updateCalc('-')}>-</span>
     {createDigits()}
     <span className="num" onClick={() => updateCalc('0')}>0</span>
     <span className="num" onClick={() => updateCalc('.')}>.</span>
     <span className="num" onClick={calculate}>=</span>
    </div>
   </div>
  </ Tilt>
 );
}

export default App;
