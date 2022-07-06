import "./Scoreboard.css";

export default function Scoreboard({
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  return (
    <div className="score-board">
      <div className="current-score">
        <h3>Score</h3>
        <h3>{score}</h3>
      </div>
      <div className="current-high-score">
        <h3>High Score</h3>
        <h3>{highScore}</h3>
      </div>
    </div>
  );
}
