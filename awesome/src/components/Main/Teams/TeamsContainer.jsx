import { connect } from "react-redux";
import { setTeams, toggleIsFetching } from "../../../redux/TeamsReducer";
import Teams from "./Teams";
import axios from "axios";
import React from "react";
import { fixturesAPI, footballAPI } from "../../../api/api";
import Preloader from "../../Common/Preloader/Preloader";

class TeamsContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    footballAPI
      .getTeams("fixtures")
      .then((data) => {
        this.props.toggleIsFetching(false);
        console.log(data);
        this.props.setTeams(data[0][" Matchday 29 "]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Teams teams={this.props.teams} />{" "}
      </>
    );
  }
}
// параметр state,доступ к store мы получаем от <Provider/> с помощью connect
let mapStateToProps = (state) => {
  return {
    teams: state.teamsPage.teams,
    isFetching: state.teamsPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setTeams,
  toggleIsFetching: toggleIsFetching,
})(TeamsContainer);
