import React, { useState, useEffect } from "react";
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
  const [checkedCards, setCheckedCards] = useState([]);
  const [objects, setObjects] = useState([
    { name: "Snoopy", src: snoopy, id: 1 },
    { name: "Sally", src: sally, id: 2 },
    { name: "Woodstock", src: woodstock, id: 3 },
    { name: "Charlie B", src: charlieBrown, id: 4 },
  ]);
  //Shuffle Function

  //Shuffle
  useEffect(() => {
    setObjects((prev) => prev.sort((a, b) => 0.5 - Math.random()));
  }, [score]);
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
  //creates card container
  const cardContainer = objects.map((character, position) => {
    return (
      <div
        className="card"
        key={character.id}
        onClick={addScore}
        id={character.id}
      >
        <img id={character.id} src={character.src}></img>
        <h4 id={character.id}>{character.name}</h4>
      </div>
    );
  });

  ///RENDERED
  return (
    <div className="card-container">
      {cardContainer} <div></div>
    </div>
  );
}
