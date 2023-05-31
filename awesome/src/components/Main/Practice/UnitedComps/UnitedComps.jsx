import ClickIncrease from "../FontIncrease/ClickIncrease";
import HoverIncrease from "../FontIncrease/HoverIncrease";
import Greeting from "../Greeting/Greeting";
import List from "../List/List";

const UnitedComps = (props) => {
  return (
    <>
      <ClickIncrease age={13} />
      <HoverIncrease age={35} />
      <Greeting name={"Alexander"} position={"front-end developer"} />
      <List />
    </>
  );
};

export default UnitedComps;
