import { connect } from "react-redux";
import News from "./News";

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.newsData, //object - key:news (идет в название пропса в News),value:state.newsData(объект с массивом [newsData])
  };
};

const NewsContainer = connect(mapStateToProps)(News); //we connect our data to store and make container component
export default NewsContainer;
