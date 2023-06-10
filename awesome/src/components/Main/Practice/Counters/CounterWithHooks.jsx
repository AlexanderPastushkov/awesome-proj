import React, { useState } from "react";

import s from "./Counter.module.css";

const CounterWithHooks = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <div className={s.counter}>
        <button className={s.btn} onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>{count}</span>
        <button className={s.btn} onClick={increment}>
          +
        </button>
        <button className={s.btn} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default CounterWithHooks;
