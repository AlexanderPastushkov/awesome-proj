import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUsers } from "../../../redux/UsersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  render() {
    return <Users users={this.props.users} />;
  }
  componentDidMount() {
    this.props.getUsers();
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
export default compose(
  connect(mapStateToProps, {
    getUsers: getUsers,
  })
)(UsersContainer);
