import React from "react";
import { connect } from "react-redux";
import { anotherFootballAPI, footballAPI } from "../../../api/api";
import { addComment, updateCommentText } from "../../../redux/PracticeReducer";
import Practice from "./Practice";

class PracticeContainer extends React.Component {
  render() {
    console.log("RENDERED");
    return (
      <Practice
        practicePage={this.props.practicePage}
        addComment={this.props.addComment}
        updateCommentText={this.props.updateCommentText}
      />
    );
  }
  componentDidMount() {
    footballAPI.getTeams("results").then((data) => {
      console.log(data);
      // this.props.toggleIsFetching(false);
    });
  }
}

let mapStateToProps = (state) => {
  return {
    practicePage: state.practicePage,
  };
};
export default connect(mapStateToProps, {
  addComment: addComment,
  updateCommentText: updateCommentText,
})(PracticeContainer);
