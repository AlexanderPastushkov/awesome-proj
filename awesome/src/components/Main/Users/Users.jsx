import { NavLink } from "react-router-dom";
import s from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <div key={u.id} className={s.userItems}>
          <NavLink to={"/users/"}>
            <div>{u.id}</div>
            <div>name: {u.name}</div>
            <div>username: {u.username}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default Users;
