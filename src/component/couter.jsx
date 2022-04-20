// import { useState } from "react";
import "../styles/counter.css";
import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from "../redux/action";


export const Counter = () => {
  const changeTheState= useSelector((state)=>state.changeNumber);
  const dispatcher= useDispatch()
  

  return(
    <>
    <div>
     
       <button onClick={()=>dispatcher(incNumber(5))} >+</button>   <h1>{changeTheState}</h1> <span> <button onClick={()=>dispatcher(decNumber(2))}>-</button></span>
    </div>
    </>
  )

};
