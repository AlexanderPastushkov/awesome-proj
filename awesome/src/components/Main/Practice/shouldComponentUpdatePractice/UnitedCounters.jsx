import React, { useState } from "react";
import Counter1 from "./CounterClass1";
import Counter2 from "./CounterClass2";
import CounterFunc1 from "./CounterFunc1";
import CounterFunc2 from "./CounterFunc2";

const UnitedCounters = () => {
  const [counter1, setCounter1] = useState(0);
  const increase1 = () => {
    setCounter1(counter1 + 1);
  };
  const clearValue1 = () => {
    setCounter1(0);
  };
  //========================================================================================================================================================
  const [counterFunc1, setCounterFunc1] = useState(0);
  const increaseFunc1 = () => {
    setCounterFunc1(counterFunc1 + 1);
  };
  const clearValueFunc1 = () => {
    setCounterFunc1(0);
  };
  //========================================================================================================================================================
  const [counter2, setCounter2] = useState(0);
  const increase2 = () => {
    setCounter2(counter2 + 1);
  };
  const clearValue2 = () => {
    setCounter2(0);
  };
  //========================================================================================================================================================
  const [counterFunc2, setCounterFunc2] = useState(0);
  const increaseFunc2 = () => {
    setCounterFunc2(counterFunc2 + 1);
  };
  const clearValueFunc2 = () => {
    setCounterFunc2(0);
  };
  //========================================================================================================================================================
  return (
    <>
      <Counter1
        clearClass1={clearValue1}
        valueClass1={counter1}
        onClickClass1={increase1}
      />
      <Counter2
        clearClass2={clearValue2}
        valueClass2={counter2}
        onClickClass2={increase2}
      />
      <CounterFunc1
        clearFunc1={clearValueFunc1}
        valueFunc1={counterFunc1}
        onClickFunc1={increaseFunc1}
      />
      <CounterFunc2
        clearFunc2={clearValueFunc2}
        valueFunc2={counterFunc2}
        onClickFunc2={increaseFunc2}
      />
    </>
  );
};
export default UnitedCounters;
