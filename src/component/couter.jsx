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
     
       <button onClick={()=>dispatcher(incNumber())} >+</button>   <h1>{changeTheState}</h1> <span> <button onClick={()=>dispatcher(decNumber())}>-</button></span>
    </div>
    </>
  )

};
