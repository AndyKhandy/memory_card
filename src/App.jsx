import { useState } from "react";
import "./App.css";
import usePokeData from "./data/pokeData";
import CardHolder from "./components/CardHolder";
import { shuffle } from "./data/shuffle";

export function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [numPokemon, setNumPokemon] = useState(10);
  const { totalData, loading, setTotalData, fetchPokeData } = usePokeData();
  const [clickedIds, setClickedIds] = useState([]);

  const handleClick = async (id) => {
    if (clickedIds.includes(id)) {
      resetGame();
    } else {
      clickedIds.push(id);
      handleScore();
    }
  };

  const handleScore = () => {
    setCurrentScore((prev) => prev + 1);
    setTotalData(shuffle(totalData));
  };

  const resetGame = async () => {
    let bestGame = Math.max(bestScore, currentScore);
    setBestScore(bestGame);
    setClickedIds([]);
    setCurrentScore(0);
    fetchPokeData(numPokemon);
  };

  if (loading) {
    return <h1>Searching through the grass for Pokemon...</h1>;
  }

  return (
    <div>
      <div id="scores">
        <h2>Best Guess: {bestScore}</h2>
        <h2>Score: {currentScore}</h2>
      </div>
      <h1>PokeGuess</h1>
      <p>
        Get points by clicking on an image but don't click on any more than once
        or you'll lose your streak!
      </p>
      <label htmlFor="pokeAmount">Pokemon Amount</label>
      <input
        type="number"
        id="pokeAmount"
        value={numPokemon}
        placeholder="30"
        onChange={(e) => setNumPokemon(e.target.value)}
        min="1"
        max="20"
      />
      <button onClick={() => fetchPokeData(numPokemon)}>Submit Amount</button>
      <CardHolder data={totalData} handleClick={handleClick} />
    </div>
  );
}
