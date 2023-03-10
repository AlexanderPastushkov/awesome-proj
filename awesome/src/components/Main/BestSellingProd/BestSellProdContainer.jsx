import { connect } from "react-redux";
import { setTeamsAC } from "../../../redux/BestSellingReducer";
import BestSells from "./BestSellProd";

let mapStateToProps = (state) => {
  return {
    teams: state.teamsPage.teams,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setTeams: (teams) => {
      dispatch(setTeamsAC(teams));
    },
  };
};
const BestSellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BestSells);
export default BestSellContainer;
