import React from "react";
import { connect } from "react-redux";
import { showTransfersAC } from "../../../redux/TransferReducer";
import axios from "axios";
import Transfers from "./Transfers";

class TransfersContainer extends React.Component {
  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://football98.p.rapidapi.com/premierleague/results",
      headers: {
        "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
        "X-RapidAPI-Host": "football98.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.props.showTransfers(response.data);
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
let mapDispatchToProps = (dispatch) => {
  return {
    showTransfers: (transfers) => {
      dispatch(showTransfersAC(transfers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransfersContainer);
