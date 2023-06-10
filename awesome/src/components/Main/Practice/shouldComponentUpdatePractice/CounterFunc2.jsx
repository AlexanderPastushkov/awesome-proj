import React from "react";
const CounterFunc2 = ({ clearFunc2, valueFunc2, onClickFunc2 }) => {
  console.log("CounterFunc2 render");
  return (
    <div>
      <h2>Counter2:</h2>
      <h3>{valueFunc2}</h3>
      <button style={{ marginRight: 15 }} onClick={onClickFunc2}>
        +
      </button>
      <button onClick={clearFunc2}>Clear</button>
    </div>
  );
};

export default React.memo(CounterFunc2, (prevProps, nextProps) => {
  if (prevProps.valueFunc2 !== nextProps.valueFunc2) {
    return false; //we return false if we want to component be updated
  }
  return true; //if we return true ---> this means props were unchanged, component will not be updated
});
