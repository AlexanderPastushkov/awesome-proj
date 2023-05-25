import React from "react";
import s from "./Posts.module.css";
export const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((p) => (
        <div key={p.id}>
          <div className={s.title}> {p.title} </div>
          <div className={s.text}> {p.body}</div>
        </div>
      ))}
    </div>
  );
};
