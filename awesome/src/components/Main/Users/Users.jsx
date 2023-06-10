import { NavLink } from "react-router-dom";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <UserItem name={u.name} username={u.username} key={u.id} />
      ))}
    </div>
  );
};
export default Users;
