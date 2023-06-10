import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      ClearTimeout example
      <h1>I've rendered {count} times!</h1>
    </div>
  );
};
export default Timer;
