import s from "./Newspapers.module.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Newspapers = (props) => {
  console.log(props);
  let pagesCount = Math.ceil(
    props.totalNewspapersCount / props.pageSize // округляем до большего чтоб все страницы отображались
  );
  let pages = []; //add pages count in array
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <div className={s.newspapers}>
      <div className={s.usersItems}>
        {props.newspapers.map((u) => (
          <div className={s.userInfo} key={u.id}>
            <div>
              <NavLink to={u.url.slice(0, -5)}>
                <div>
                  <div>start year {u.start_year}</div>
                  {/* <div>publisher {!u.publisher ? "Hello" : u.publisher}</div> */}
                  <div>end year {u.end_year}</div>
                  <div>country: {u.country} </div>
                </div>
              </NavLink>
              {/* <div className={s.userLocation}>
              <div className={s.userCountry}>{u.location.country}</div>
              <div className={s.userCity}>{u.location.city}</div>
            </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className={s.pagination}>
        {pages.map((p) => (
          <div
            key={p}
            className={props.currentPage === p ? s.selectedPage : s.nonSelected}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newspapers;
