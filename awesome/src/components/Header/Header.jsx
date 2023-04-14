import s from "./Header.module.css";
import Links from "./Links/Links";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <Logo />
      <Links />
    </div>
  );
};
export default Header;
