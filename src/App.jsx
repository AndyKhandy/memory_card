import { useState } from "react";
import "./App.css";
import usePokeData from "./data/pokeData";
import CardHolder from "./components/CardHolder";
import { shuffle } from "./data/shuffle";
import PokeForm from "./components/PokeForm";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchPokeData(numPokemon);
  };

  if (loading) {
    return (
      <h1 id="fetch-display">
        Searching through the grass for {bestScore > 0 ? "new " : ""}Pokemon...
      </h1>
    );
  }

  return (
    <div className="main-screen grid">
      <header className="flex">
        <div className="header-text">
          <h1 id="title">PokeGuess</h1>
          <p>
            Get points by clicking on an image but don't click on any more than
            once or you'll lose your streak!
          </p>
        </div>
        <PokeForm
          numPokemon={numPokemon}
          setNumPokemon={setNumPokemon}
          handleForm={handleFormSubmit}
        />

        <div id="scores">
          <h2>Best Guess: {bestScore}</h2>
          <h2>Score: {currentScore}</h2>
        </div>
      </header>
      <CardHolder data={totalData} handleClick={handleClick} />
    </div>
  );
}
