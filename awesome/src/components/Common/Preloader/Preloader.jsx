import preloader from "../../../Assets/Images/Rolling-1s-200px.svg";
import s from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={s.imagePreloader}>
      <img src={preloader} />
    </div>
  );
};
export default Preloader;
