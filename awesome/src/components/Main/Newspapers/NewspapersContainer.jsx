import { connect } from "react-redux";

import axios from "axios";
import React from "react";
import {
  setCurrentPageAC,
  setNewspapersAC,
  setTotalNewspapersCountAC,
} from "../../../redux/NewspapersReducer";
import Newspapers from "./Newspapers";

class NewspapersContainer extends React.Component {
  componentDidMount() {
    // const options = {
    //   method: "GET",
    //   url: "https://football98.p.rapidapi.com/premierleague/fixtures",
    //   headers: {
    //     "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
    //     "X-RapidAPI-Host": "football98.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then((response) => {
    //     console.log(response.data[0][" Matchday 27 "]);
    //     this.props.setTeams(response.data[0][" Matchday 27 "]);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    axios
      .get(
        `https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setNewspapers(response.data.items);
        console.log(response.data.items);
        this.props.setTotalNewspapersCount(response.data.totalItems);
        console.log(response.data.totalItems);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setNewspapers(response.data.items);
        this.props.setTotalNewspapersCount(response.data.totalItems);
      });
  };
  render() {
    return (
      <Newspapers
        totalNewspapersCount={this.props.totalNewspapersCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        newspapers={this.props.newspapers}
        pageSize={this.props.pageSize}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    newspapers: state.newspapersPage.newspapers,
    pageSize: state.newspapersPage.pageSize,
    totalNewspapersCount: state.newspapersPage.totalNewspapersCount,
    currentPage: state.newspapersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setNewspapers: (newspapers) => {
      dispatch(setNewspapersAC(newspapers));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalNewspapersCount: (totalNewspapersCount) => {
      dispatch(setTotalNewspapersCountAC(totalNewspapersCount));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewspapersContainer);
