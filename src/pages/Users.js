import React from "react";

export default function About(props) {

  return (
    <div className="content">
      <h1>Користувачі</h1>
      <ul>
        {props.users.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}