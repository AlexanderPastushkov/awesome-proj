import s from "./Teams.module.css";

import { NavLink } from "react-router-dom";
import React from "react";

const Teams = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Matchday 29</h2>
      <div className={s.title}>
        {props.teams.map((u) => (
          <NavLink to="/best">
            <div className={s.usersItems} key={u.id}>
              <div>
                <img src={u.homeLogo} alt="photo" className={s.img} />
              </div>
              <div>
                <span>home Team :</span> {u.homeTeam}
              </div>
            </div>
            <div className={s.usersItems} key={u.id}>
              <div>
                <img src={u.awayLogo} alt="photo" className={s.img} />
              </div>
              <div>
                <span>away Team :</span> {u.awayTeam}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Teams;
