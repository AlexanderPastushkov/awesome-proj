import React from "react";

const Greeting = ({ name, position }) => {
  return (
    <div>
      {name ? <h1>Hi! My name is {name}</h1> : <span>No name</span>}
      {/* <h1>Hi! My name is {name}</h1> */}
      <h2>I work as a {position}</h2>
    </div>
  );
};
export default Greeting;
