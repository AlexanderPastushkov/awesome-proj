import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount, name) => {
  const NewComponent = (props) => {
    const [counter, setCounter] = useState(10);
    const [color, setColor] = useState("red");
    return (
      <OriginalComponent
        {...props} //pass down all incoming props to the HOC's children
        name={name}
        counter={counter}
        color={color}
        clearCounter={() => setCounter(10)}
        handleClick={() => {
          setCounter(counter + increaseCount);
        }}
      />
    );
  };
  return NewComponent;
};
export default UpdatedComponent; //example of sharing state and props in HOCs
