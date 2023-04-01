import { connect } from "react-redux";

import axios from "axios";
import React from "react";
import {
  setCurrentPage,
  setNewspapers,
  setTotalNewspapersCount,
  toggleIsFetching,
} from "../../../redux/NewspapersReducer";
import Newspapers from "./Newspapers";
import Preloader from "../../Common/Preloader/Preloader";
import { newspapersAPI } from "../../../api/api";

class NewspapersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    newspapersAPI
      .getNewspapers("texas", this.props.currentPage)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setNewspapers(data.items);
        console.log(data.items);
        this.props.setTotalNewspapersCount(data.totalItems);
        console.log(data.totalItems);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    newspapersAPI.getNewspapers("texas", pageNumber).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setNewspapers(data.items);
      this.props.setTotalNewspapersCount(data.totalItems);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Newspapers
          totalNewspapersCount={this.props.totalNewspapersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          newspapers={this.props.newspapers}
          pageSize={this.props.pageSize}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    newspapers: state.newspapersPage.newspapers,
    pageSize: state.newspapersPage.pageSize,
    totalNewspapersCount: state.newspapersPage.totalNewspapersCount,
    currentPage: state.newspapersPage.currentPage,
    isFetching: state.newspapersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setNewspapers,
  setCurrentPage,
  setTotalNewspapersCount,
  toggleIsFetching,
})(NewspapersContainer); //connect help us to get props from <Provider store={store}><App/></Provider>->we create context
