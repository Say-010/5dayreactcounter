//import logo from './logo.svg';
import './App.css';
//import React,{component, useState} from 'react';
//import Button From "./components/Button"

import React, { useState } from "react";
import Button from "./components/Button";


export default function App() {
  let[count,setCount]=useState(0);

  let incrementCount=()=>{
    setCount(count
      +1);
  };

  let decrementCount=()=>{
    if(count>0){
    
      setCount(count-1);
      }
   
  };

  return (
    <div className="app">
      <center> 
      <div>
        <div class="count">
          <h3>Counter Button</h3>
          <h1>{count}</h1>
        </div> 
        <div class="buttons">
          <Button title={"- decrement"} action={decrementCount} />
         <br/> 

         <br/>
         <Button title={"+ increment"} action={incrementCount} />
        </div>
        
      </div>

      </center>
    </div>
  );
}
