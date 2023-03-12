import axios from "axios";
import { connect } from "react-redux";
import { showNewsAC } from "../../../redux/NewsReducer";
import News from "./News";
import React from "react";

class NewsContainer extends React.Component {
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

    const options = {
      method: "GET",
      url: "https://football98.p.rapidapi.com/premierleague/news",
      headers: {
        "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
        "X-RapidAPI-Host": "football98.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.props.showNews(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return <News news={this.props.news} />;
  }
}

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.news, //object - key:news (идет в название пропса в News),value:state.newsData(объект с массивом [newsData])
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    showNews: (news) => {
      dispatch(showNewsAC(news));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer); //we connect our data to store and make container component
