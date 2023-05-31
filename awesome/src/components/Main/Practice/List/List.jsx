import React from "react";
const List = () => {
  return (
    <ul>
      {["first", "second"].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
