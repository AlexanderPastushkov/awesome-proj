import React, { useEffect, useState } from "react";
import AddUser from "./AddUser/AddUser";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

const UsersFunctional = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, ["https://jsonplaceholder.typicode.com/users"]);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => setUsers((users) => [...users, data]))
      .catch((err) => console.log(err));
  }; //add fake user

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => console.log(err));
  }; //imitation od deleting user
  return (
    <div>
      <AddUser onAdd={onAdd} />
      <div className={s.users}>
        {[...users].reverse().map((user) => (
          <UserItem
            name={user.name}
            username={user.username}
            email={user.email}
            key={user.id}
            onDelete={onDelete}
            id={user.id}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersFunctional;
