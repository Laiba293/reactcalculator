import React from "react";
import  {add , sub , div , mult } from "./Calc";
function App(){
    return(
        <>
           <ul>
                <li> {add(40,4)} </li>
                <li> {sub(30,3)}</li>
                <li>  {div(10,4)}</li>
                <li> {mult(3,5)}</li>
           </ul>
        </>
    );
} export default App;