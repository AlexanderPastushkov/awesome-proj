import React from "react";
import { connect } from "react-redux";
import { getTable } from "../../../redux/PracticeReducer";
import Preloader from "../../Common/Preloader/Preloader";
import Practice from "./Practice";

class PracticeContainer extends React.Component {
  render() {
    console.log("RENDERED");
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Practice practicePage={this.props.practicePage} />
      </>
    );
  }
  componentDidMount() {
    console.log("I know i am inside the DOM");
    this.props.getTable();
  }
}

let mapStateToProps = (state) => {
  return {
    practicePage: state.practicePage,
  };
};
export default connect(mapStateToProps, {
  getTable: getTable, //thunk
})(PracticeContainer);
