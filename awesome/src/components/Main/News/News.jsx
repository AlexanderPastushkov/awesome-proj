import s from "./News.module.css";
import NewsContent from "./NewsContent/NewsContent";

const News = (props) => {
  let newsElements = props.news.map((n) => (
    <NewsContent message={n.message} likeCount={n.likeCount} />
  ));
  return (
    <div className={s.newsContainer}>
      <div className={s.newsElements}>{newsElements}</div>
    </div>
  );
};
export default News;
