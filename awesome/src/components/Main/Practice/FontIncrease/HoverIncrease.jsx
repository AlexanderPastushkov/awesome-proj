import React, { useState } from "react";
import s from "./ClickIncrease.module.css";
import randomColor from "randomcolor";
import withCounter from "../../../hoc/withCounter.js";
const HoverIncrease = (props) => {
  return (
    <div className={s.items}>
      <button className={s.btn} onMouseOver={props.handleClick}>
        {/* <button className={s.btn} onClick={() => setFontSize((fs)=>fs + 1)}> */}
        Increase with mouseOver
      </button>
      <p
        className={s.textSize}
        style={{ fontSize: props.counter, backgroundColor: props.color }}
      >
        Size of font in onMouseOver function: {props.counter} ; randomColor is{" "}
        {props.color}
      </p>

      <button
        className={s.btn}
        onClick={() => {
          props.clearCounter();
        }}
      >
        Default value
      </button>
      <p className={s.textName}>
        Value of name in HoverIncrease:{" "}
        <span
          style={{ fontSize: props.counter, color: "white" }}
          className={s.name}
        >
          {" "}
          {props.name}
        </span>
        <span
          className={s.age}
          style={{ fontSize: props.counter, color: "white" }}
        >
          {" "}
          age: {props.age}
        </span>
      </p>
    </div>
  );
};
export default withCounter(HoverIncrease, 2, "Alexander");
