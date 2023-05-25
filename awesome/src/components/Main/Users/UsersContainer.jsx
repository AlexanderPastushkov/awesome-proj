import React from "react";
import { getUsers } from "../../../redux/UsersReducer";
import Users from "./Users";
import { connect } from "react-redux";
import { compose } from "redux";
import s from "./Users.module.css";
import CounterWithHooks from "./CounterWithHooks";
import { decrement, increment, reset } from "../../../redux/PracticeReducer";
import CounterWithRedux from "./CounterWithRedux";
import External from "../HooksPractice/useContextPractice";

class UsersContainer extends React.Component {
  state = {
    count: 0,
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  reset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div>
        <p> useContext Practice</p>
        <External />
        <p>with setState</p>
        <div className={s.counter}>
          <button className={s.btn} onClick={this.decrement}>
            -
          </button>
          <span>{this.state.count}</span>
          <button className={s.btn} onClick={this.increment}>
            +
          </button>
          <button className={s.btn} onClick={this.reset}>
            Reset
          </button>
        </div>
        <p>with redux Store</p>
        <CounterWithRedux
          practicePage={this.props.practicePage}
          increment={this.props.increment}
          decrement={this.props.decrement}
          reset={this.props.reset}
        />
        <p>
          with useState
          <CounterWithHooks />
        </p>
        <Users users={this.props.users} />
      </div>
    );
  }
  componentDidMount() {
    this.props.getUsers();
    console.log(this.props);
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    practicePage: state.practicePage,
  };
};
export default compose(
  connect(mapStateToProps, {
    getUsers: getUsers,
    increment: increment,
    decrement: decrement,
    reset: reset,
  })
)(UsersContainer);
