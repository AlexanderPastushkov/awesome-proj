import s from "./Teams.module.css";

import { NavLink } from "react-router-dom";
import React from "react";

const Teams = (props) => {
  return (
    <div>
      <h2>Matchday 29</h2>
      <div className={s.title}>
        {props.teams.map((u) => (
          <div key={u?.id}>
            <button>Subscribe</button>
            <div className={s.usersItems}>
              <div>
                <img src={u?.homeLogo} alt="photo" className={s.img} />
              </div>
              <div>
                <span className={s.blueColor}>home Team :</span> {u?.homeTeam}
              </div>
            </div>
            <div className={s.usersItems} key={u?.id}>
              <div>
                <img src={u?.awayLogo} alt="photo" className={s.img} />
              </div>
              <div>
                <span className={s.blueColor}>away Team :</span> {u?.awayTeam}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
