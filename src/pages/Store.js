import React from "react";
import Box from "../components/Box"

export default function Store() {
  return (
    <div className="content">
      <h1>Store</h1>
      <div className="homeContent">
        <Box title="Товар 1"></Box>
        <Box title="Товар 2"></Box>
        <Box title="Товар 3"></Box>
      </div>
    </div>
  );
}