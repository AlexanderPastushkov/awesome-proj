import Timer from "../ClearTimeout/ClearTimeout";
import CounterContainer from "../Counters/CounterContainer";
import ClickIncrease from "../FontIncrease/ClickIncrease";
import HoverIncrease from "../FontIncrease/HoverIncrease";
import External from "../HooksUseContextPractice/useContextPractice";
import SetTimeout from "../SetTimeout/SetTimeout";
import s from "./UnitedComps.module.css";

const UnitedComps = (props) => {
  return (
    <div>
      <div>
        <ClickIncrease age={13} />
        {/*example of passing props throught withCounter HOC */}
      </div>
      <div>
        <HoverIncrease age={35} />
        {/*example of passing props throught withCounter HOC */}
      </div>
      <div className={s.useContext}>
        <External />
        {/*example useContext */}
      </div>
      <div>
        <Timer />
        {/*example useContext */}
      </div>
      <div>
        <SetTimeout />
        {/*example useContext */}
      </div>
      <div>
        <CounterContainer />
        {/*example useContext */}
      </div>
    </div>
  );
};

export default UnitedComps;
