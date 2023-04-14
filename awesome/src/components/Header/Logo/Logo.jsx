import logo from "../../../Assets/Images/ball_logo.png";
import s from "./Logo.module.css";
const Logo = () => {
  return (
    <div>
      <img className={s.imageLogo} src={logo} alt="logo" />
    </div>
  );
};
export default Logo;
