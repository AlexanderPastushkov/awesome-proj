import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { decrement, increment, reset } from "../../../../redux/PracticeReducer";
import s from "./Counter.module.css";
import CounterWithHooks from "./CounterWithHooks";

import CounterWithRedux from "./CounterWithRedux";

class CounterContainer extends React.Component {
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
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    practicePage: state.practicePage,
  };
};
export default compose(
  connect(mapStateToProps, {
    increment: increment,
    decrement: decrement,
    reset: reset,
  })
)(CounterContainer);
