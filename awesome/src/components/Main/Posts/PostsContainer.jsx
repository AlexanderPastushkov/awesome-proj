import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getPosts } from "../../../redux/PostsReducer";
import Posts from "./Posts";

class PostsContainer extends React.Component {
  render() {
    console.log(this.props);
    return <Posts {...this.props} />;
  }

  componentDidMount() {
    //   let userId = this.props.match.params.id;
    //   console.log(userId);
    //   if (!userId) {
    //     userId = 2;
    //   }
    // }
  }
}
let mapStateToProps = (state) => ({
  post: state.postsPage.post,
});

export default compose(
  connect(mapStateToProps, { getPosts: getPosts })
  // withRouter
  // withAuthRedirect
)(PostsContainer);
