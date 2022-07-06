import React, { useState } from "react";
import Card from "./Card";
import snoopy from "./images/Snoopy.jpg";
import sally from "./images/Sally.jpg";
import woodstock from "./images/Woodstock.jpg";
import charlieBrown from "./images/CharlieBrown.jpg";
import "./Gameboard.css";

export default function GameBoard() {
  const images = [snoopy, sally, woodstock, charlieBrown];
  const names = ["Snoopy", "Sally", "Woodstock", "Charlie Brown"];

  const cardContainer = images.map((image, position) => {
    return (
      <div className="card" key={position}>
        <img src={image}></img>
        <h4>{names[position]}</h4>
      </div>
    );
  });

  return <div className="card-container">{cardContainer}</div>;
}
