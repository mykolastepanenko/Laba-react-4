import React from "react";
import { Switch } from "react-router-dom";
import {Link} from "react-router-dom"
import Box from "../components/Box"

export default function About() {
  return (
    <div className="content">
      <h1>Домашня сторінка</h1>
      <div className="homeContent">
        <Link to="/about"><Box title="About"/></Link>
        <Link to="/admin"><Box title="Admin"/></Link>
        <Link to="/user"><Box title="User"/></Link>
        <Link to="/users"><Box title="Users"/></Link>
        <Link to="/store"><Box title="Store"/></Link>
      </div>
    </div>
  );
}