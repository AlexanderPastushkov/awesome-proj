import React from "react";
import s from "./AddUser.module.css";

const AddUser = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add fake User</h3>
        <input className={s.formInput} placeholder="Name" name="name" />
        <input className={s.formInput} placeholder="Email" name="email" />
        <button className={s.btn} onSubmit={handleSubmit}>
          Add
        </button>
        <hr />
      </form>
    </div>
  );
};
export default AddUser;
