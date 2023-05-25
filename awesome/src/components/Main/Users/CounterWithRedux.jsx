import React, { useState } from "react";
import s from "./Users.module.css";

const CounterWithRedux = (props) => {
  return (
    <div>
      <div className={s.counter}>
        <button className={s.btn} onClick={props.decrement}>
          -
        </button>
        <span>{props.practicePage.count}</span>
        <button className={s.btn} onClick={props.increment}>
          +
        </button>
        <button className={s.btn} onClick={props.reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default CounterWithRedux;
