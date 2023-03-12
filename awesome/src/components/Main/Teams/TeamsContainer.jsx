import { connect } from "react-redux";
import { setTeamsAC } from "../../../redux/TeamsReducer";
import Teams from "./Teams";
import axios from "axios";
import React from "react";

class TeamsContainer extends React.Component {
  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://football98.p.rapidapi.com/premierleague/fixtures",
      headers: {
        "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
        "X-RapidAPI-Host": "football98.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data[0][" Matchday 29 "]);
        this.props.setTeams(response.data[0][" Matchday 29 "]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return <Teams teams={this.props.teams} />;
  }
}

let mapStateToProps = (state) => {
  return {
    teams: state.teamsPage.teams,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setTeams: (teams) => {
      dispatch(setTeamsAC(teams));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
