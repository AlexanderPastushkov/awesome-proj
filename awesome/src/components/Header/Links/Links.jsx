import { NavLink } from "react-router-dom";
import s from "./Links.module.css";

const activeLink = ({ isActive }) => (isActive ? s.active : s.item);
const Links = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/results" className={activeLink}>
          Results
        </NavLink>
      </div>
      <div>
        <NavLink to="/teams" className={activeLink}>
          Teams
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={activeLink}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/practice" className={activeLink}>
          Table
        </NavLink>
      </div>
      <div>
        <NavLink to="/newspapers" className={activeLink}>
          Newspapers
        </NavLink>
      </div>
    </nav>
  );
};
export default Links;
