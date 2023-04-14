import axios from "axios";
import { connect } from "react-redux";
import {
  showFootballNews,
  showNews,
  showNewsAC,
} from "../../../redux/NewsReducer";
import News from "./News";
import React from "react";
import { footballAPI } from "../../../api/api";

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.showFootballNews();
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

export default connect(mapStateToProps, { showFootballNews: showFootballNews })(
  NewsContainer
); //we connect our data to store and make container component
