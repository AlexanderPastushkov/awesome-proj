import { connect } from "react-redux";
import Interior from "./Interior.jsx";
import {
  addChairCreator,
  updateChairCreator,
} from "../../../redux/InteriorReducer";

let mapStateToProps = (state) => {
  return {
    interiorPage: state.interiorPage, //object - key:dialogsPage (идет в название пропса в Dialogs),value:state.dialogsPage(объект с массивами [dialogsData] [messagesData])
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onShowChairCLick: () => {
      dispatch(addChairCreator()); //dispatch our action, which has been created by addMessageCreator
    },
    onShowChairChange: (body) => {
      dispatch(updateChairCreator(body));
    },
  };
};
const InteriorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Interior);
export default InteriorContainer;
