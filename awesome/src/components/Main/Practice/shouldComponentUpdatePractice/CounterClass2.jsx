import React, { PureComponent } from "react";

class Counter2 extends React.Component {
  //rendering the component only if
  //passed props value is changed
  shouldComponentUpdate(nextProps) {
    if (nextProps.valueClass2 !== this.props.valueClass2) {
      return true;
    }
    return false;
  }

  render() {
    console.log("Counter2 is render");
    return (
      <div>
        <h2>Counter2:</h2>
        <h3>{this.props.valueClass2}</h3>
        <button style={{ marginRight: 15 }} onClick={this.props.onClickClass2}>
          +
        </button>
        <button onClick={this.props.clearClass2}>Clear</button>
      </div>
    );
  }
}

export default Counter2;
