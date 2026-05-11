import {useState } from "react";
import "./App.css";
import usePokeData from "./data/pokeData";
import CardHolder from "./components/CardHolder";

export function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [numPokemon, setNumPokemon] = useState(10);
  const { totalData, loading, setTotalData, fetchPokeData } = usePokeData();


  if (loading) {
    return <h1>It's loading right now</h1>;
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

l       <label htmlFor="pokeAmount">Pokemon Amount</label>
        <input type="number" id="pokeAmount" value={numPokemon} placeholder="30" onChange={(e)=> setNumPokemon(e.target.value)} min="1" max="20"/>
        <button onClick={()=>fetchPokeData(numPokemon)}>Submit Amount</button>

      <CardHolder data={totalData}/>
    </div>
  );
}
