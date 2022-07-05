export default function Scoreboard({
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  return (
    <div>
      <h1>{score}</h1>
      <h1>{highScore}</h1>
    </div>
  );
}
