import s from "./BestSellProd.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import React from "react";

class BestSells extends React.Component {
  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://football98.p.rapidapi.com/premierleague/fixtures",
      headers: {
        "X-RapidAPI-Key": "c33e1b5d32msh4327cb83699b9c1p1c70dfjsn0cac546c9ef9",
        "X-RapidAPI-Host": "football98.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data[0][" Matchday 27 "]);
        this.props.setTeams(response.data[0][" Matchday 27 "]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <div>Matchday 27</div>
        <div className={s.title}>
          {this.props.teams.map((u) => (
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
  }
}
export default BestSells;
