import { useState } from "react";
import "../styles/counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  

  return (
    <>
      {/* <h1>{counter}</h1> */}
      <h3>{count}</h3>
      <button
        onClick={() => {
          console.log("clicked me");
          setCount(count + 1);
        }}
      >
        Click to inc
      </button>

      <button
        onClick={() => {
          console.log("clicked me");
          setCount(count - 1);
        }}
      >
        Click to dec
      </button>
    </>
  );
};
