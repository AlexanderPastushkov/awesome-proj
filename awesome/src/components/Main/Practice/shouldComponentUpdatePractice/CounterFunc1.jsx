import React from "react";
const CounterFunc1 = (props) => {
  console.log("CounterFunc1 render");
  return (
    <div>
      <h2>Counter1:</h2>
      <h3>{props.valueFunc1}</h3>
      <button style={{ marginRight: 15 }} onClick={props.onClickFunc1}>
        +
      </button>
      <button onClick={props.clearFunc1}>Clear</button>
    </div>
  );
};

export default React.memo(CounterFunc1, (prevProps, nextProps) => {
  if (prevProps.valueFunc1 !== nextProps.valueFunc1) {
    return false; //we return false if we want to component be updated
  }
  return true; //if we return true ---> this means props were unchanged, component will not be updated
});
