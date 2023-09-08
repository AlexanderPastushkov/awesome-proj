import React from "react";
import s from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clear, decrement, increment } from "../../../../redux/countSlice";

const CounterWithRedux = () => {
  const dispatch = useDispatch();
  const handleClickDecrement = () => dispatch(decrement());
  const handleClickIncrement = () => dispatch(increment());
  const handleClickClear = () => dispatch(clear());
  const count = useSelector((state) => state.countReducer.count);
  console.log(count);
  return (
    <div>
      <div className={s.counter}>
        <button className={s.btn} onClick={handleClickDecrement}>
          -
        </button>
        <span>{count}</span>
        <button className={s.btn} onClick={handleClickIncrement}>
          +
        </button>
        <button className={s.btn} onClick={handleClickClear}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default CounterWithRedux;
