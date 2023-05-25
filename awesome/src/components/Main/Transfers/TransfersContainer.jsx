import React from "react";
import { connect } from "react-redux";
import {
  showTransfers,
  toggleIsFetching,
} from "../../../redux/TransferReducer";

import Transfers from "./Transfers";
import { footballAPI } from "../../../api/api";

class TransfersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    footballAPI
      .getTeams("premierleague/results")
      .then((data) => {
        this.props.toggleIsFetching(false);
        console.log(data);
        this.props.showTransfers(data[0][" Matchday 34 "]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return <Transfers transfers={this.props.transfers} />;
  }
}

let mapStateToProps = (state) => {
  return {
    transfers: state.transfersPage.transfers,
  };
};

export default connect(mapStateToProps, {
  showTransfers,
  toggleIsFetching: toggleIsFetching,
})(TransfersContainer);
