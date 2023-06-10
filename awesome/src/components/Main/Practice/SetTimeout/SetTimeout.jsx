import React, { useEffect, useState } from "react";
import s from "./SetTimeout.module.css";

const SetTimeout = (props) => {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPhrase("How you doing?");
    }, 3000);
  }, [phrase]);
  return (
    <div className={s.setTimeoutDiv}>
      <h2 className={s.title}>setTimeout</h2>
      <div className={s.phrase}>Hello my dear friend!!! {phrase}</div>
    </div>
  );
};

export default SetTimeout;
