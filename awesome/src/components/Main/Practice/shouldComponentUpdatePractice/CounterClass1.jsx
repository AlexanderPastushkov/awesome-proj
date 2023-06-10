import React, { PureComponent } from "react";

class Counter1 extends React.Component {
  //rendering the component only if
  //passed props value is changed
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.valueClass1 !== this.props.valueClass1 ||
      nextState !== this.state
    ) {
      return true;
    }
    return false;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ a: 16 });
    }, 4000);
  }
  render() {
    console.log("Counter1 render");
    return (
      <div>
        <h2>Counter1:</h2>
        <h3>{this.props.valueClass1}</h3>
        <button style={{ marginRight: 15 }} onClick={this.props.onClickClass1}>
          +
        </button>
        <button onClick={this.props.clearClass1}>Clear</button>
      </div>
    );
  }
}

export default Counter1;

//========================================================================================================================================================
// чтоб не сравнивать каждое свойство в методе, вот вам готовое решение
// shouldComponentUpdate(nextProps, nextState) {
//   const currentProps = this.props;
//   const currentState = this.state;
//   return (
//     Object.keys(nextProps).some(prop =>
//       nextProps[prop] !== currentProps[prop]
//     ) ||
//     Object.keys(nextState).some(prop =>
//       nextState[prop] !== currentState[prop]
//     )
//   );
// }
