import s from "./Header.module.css";
import Links from "./Links/Links";
import Logo from "./Logo/Logo";

const Header = (props) => {
  return (
    <div className={s.wrapper}>
      <Logo />
      <div>search</div>
      <Links />
      <div>social</div>
    </div>
  );
};
export default Header;
