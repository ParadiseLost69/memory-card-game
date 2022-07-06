import React, { useState } from "react";
import Card from "./Card";
import snoopy from "./images/Snoopy.jpg";
import sally from "./images/Sally.jpg";
import woodstock from "./images/Woodstock.jpg";
import charlieBrown from "./images/CharlieBrown.jpg";
import "./Gameboard.css";

export default function GameBoard({
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  const images = [snoopy, sally, woodstock, charlieBrown];
  const names = ["Snoopy", "Sally", "Woodstock", "Charlie Brown"];
  const [checkedCards, setCheckedCards] = useState([]);

  //function to link the card ID to score
  function addScore(e) {
    if (checkedCards.includes(e.target.id)) {
      setScore(0);
      setCheckedCards([]);
    } else {
      setCheckedCards((prevCheckedCards) => {
        return [...prevCheckedCards, e.target.id];
      });
      setScore((prevScore) => prevScore + 1);
      score >= highScore && setHighScore((prevHighScore) => prevHighScore + 1);
    }
  }
  //creates card container. ID = names of characters
  const cardContainer = images.map((image, position) => {
    return (
      <div
        className="card"
        key={position}
        onClick={addScore}
        id={names[position]}
      >
        <img id={names[position]} src={image}></img>
        <h4 id={names[position]}>{names[position]}</h4>
      </div>
    );
  });

  return <div className="card-container">{cardContainer}</div>;
}
