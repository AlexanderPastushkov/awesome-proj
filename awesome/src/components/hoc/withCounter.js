import randomColor from "randomcolor";
import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount, name) => {
  return function NewComponent(props) {
    const [counter, setCounter] = useState(10);
    const [color, setColor] = useState(randomColor());
    return (
      <OriginalComponent
        {...props} //pass down all incoming props to the HOC's children
        name={name}
        counter={counter}
        color={color}
        clearCounter={() => setCounter(10)}
        handleClick={() => {
          setCounter(counter + increaseCount);
          setColor(randomColor());
        }}
      />
    );
  };
};
export default UpdatedComponent; //example of sharing state and props in HOCs
