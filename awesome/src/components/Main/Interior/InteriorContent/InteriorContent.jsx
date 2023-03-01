import image from "../../News/NewsImages/04.svg";
import s from "./InteriorContent.module.css";
const InteriorContent = (props) => {
  return (
    <div className={s.interiorContent}>
      <div className={s.chair}>{props.message}</div>
      <div className={s.image}>
        <img src={image} alt="chair" />
      </div>
    </div>
  );
};
export default InteriorContent;
