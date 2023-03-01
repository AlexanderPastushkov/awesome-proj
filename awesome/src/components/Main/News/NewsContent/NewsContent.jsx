import s from "./NewsContent.module.css";
import image from "../NewsImages/02.svg";
const NewsContent = (props) => {
  return (
    <div className={s.newsContent}>
      <div className={s.img_div}>
        <img className={s.img} src={image} alt="ddd" />
      </div>
      <div> {props.message}</div>
      <div>{props.likeCount}</div>
    </div>
  );
};
export default NewsContent;
