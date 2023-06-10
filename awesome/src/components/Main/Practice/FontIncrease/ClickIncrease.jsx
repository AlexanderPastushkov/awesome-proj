import randomColor from "randomcolor";
import React, { useState } from "react";
import s from "./ClickIncrease.module.css";
import withCounter from "../../../hoc/withCounter.js";

const ClickIncrease = (props) => {
  const {
    age = "",
    name = "",
    counter,
    color,
    clearCounter,
    handleClick,
  } = props; //destruct props
  return (
    <div className={s.items}>
      <button className={s.btn} onClick={handleClick}>
        {/* <button className={s.btn} onClick={() => setFontSize((fs)=>fs + 1)}> */}
        Increase with click
      </button>
      <p
        className={s.textSize}
        style={{ fontSize: props.counter, backgroundColor: color }}
      >
        Size of font in onClick function: {counter} ; randomColor is {color}
      </p>
      <button
        className={s.btn}
        onClick={() => {
          clearCounter();
        }}
      >
        Default value
      </button>
      <p className={s.textName}>
        Value of name in ClickIncrease:{" "}
        <span
          style={{
            fontSize: counter,
            color: "white",
            backgroundColor: color,
          }}
          className={s.name}
        >
          {" "}
          {name}
        </span>
        <span
          className={s.age}
          style={{
            fontSize: counter,
            color: "white",
            backgroundColor: color,
          }}
        >
          {" "}
          age: {age}
        </span>
      </p>
    </div>
  );
};
export default withCounter(ClickIncrease, 2, "Timofei Pastushkov"); //wrap in HOC with arguments needed
