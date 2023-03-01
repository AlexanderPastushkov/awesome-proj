import { NavLink } from "react-router-dom";
import s from "./Links.module.css";

const activeLink = ({ isActive }) => (isActive ? s.active : s.item);
const Links = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/interior" className={activeLink}>
          Interior
        </NavLink>
      </div>
      <div>
        <NavLink to="/bestsell" className={activeLink}>
          Sellings
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={activeLink}>
          News
        </NavLink>
      </div>
    </nav>
  );
};
export default Links;
