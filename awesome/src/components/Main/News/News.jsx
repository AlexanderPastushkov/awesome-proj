import s from "./News.module.css";

const News = (props) => {
  console.log(props);
  return (
    <div className={s.newsContainer}>
      <h2>News</h2>
      <div className={s.news}>
        {props.news.map((n) => (
          <div>
            <div className={s.newsItems} key={n.id}>
              <div>
                <img src={n.Image} alt="photo" className={s.img} />
              </div>
              <div>{n.Title}</div>

              <div>{n.PublisherDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default News;
