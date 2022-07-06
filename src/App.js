import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <div className="header-display">
        <Header />
        <Scoreboard
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
        <GameBoard
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      </div>
    </div>
  );
}

export default App;
