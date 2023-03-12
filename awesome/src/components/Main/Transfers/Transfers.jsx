import { NavLink } from "react-router-dom";
import s from "./Transfers.module.css";

const Transfers = (props) => {
  console.log(props);
  let tranferArr = props.transfers[0][" Matchday 27 "];
  console.log(tranferArr);
  return (
    <div>
      <h2>Results</h2>
      <div className={s.title}>
        {tranferArr.map((u) => (
          <NavLink to="/best">
            <div className={s.usersItems} key={u.id}>
              <div>
                <span>home Team :</span> {u.homeTeam}
              </div>
              <div className={s.score}>
                <div>
                  <img src={u.homeLogo} alt="photo" className={s.img} />{" "}
                </div>
                <div> {u.homeTeamScore}</div>
              </div>
            </div>
            <div className={s.usersItems} key={u.id}>
              <div>
                <span>away Team :</span> {u.awayTeam}
              </div>
              <div className={s.score}>
                <div>
                  {" "}
                  <img src={u.awayLogo} alt="photo" className={s.img} />{" "}
                </div>
                <div>{u.awayTeamScore}</div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Transfers;
