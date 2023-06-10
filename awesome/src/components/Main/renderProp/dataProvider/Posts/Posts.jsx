import React from "react";
import s from "./Posts.module.css";
export const Posts = ({ posts }) => {
  let postsFiltered = posts.filter((post) => post.body.length <= 150);
  return (
    <div>
      {postsFiltered.map((p) => (
        <div key={p.id}>
          <div className={s.title}> {p.title} </div>
          <div className={s.text}> {p.body}</div>
        </div>
      ))}
    </div>
  );
};
