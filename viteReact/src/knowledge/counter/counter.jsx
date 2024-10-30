import { useState } from "react";
import "../../../src/index.css";
function Counter() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const remVal = () => {
    if (counter >= 0) {
      setCounter(counter--);
    }
  };
  return (
    <>
      <h1 className="bg-green-400 text-white">counter:{counter}</h1>
      <button onClick={addValue} className="flex item-center justify-center">increase</button>
      <button onClick={remVal}>decrease</button>
    </>
  );
}

export default Counter;
