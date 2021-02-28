import React from "react";

export default function Admin(props) {
  return (
    <div className="content">
      <h1>Admin</h1>
      <h3>Користувачі</h3>
      <ul>
        {props.users.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}