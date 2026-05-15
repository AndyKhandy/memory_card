export default function PokeForm({ numPokemon, setNumPokemon, handleForm }) {
  return (
    <form onSubmit={handleForm} className="flex">
      <div className="input flex flex-ali gap">
        <label htmlFor="poke-amount">Pokemon Amount:</label>
        <input
          type="number"
          id="poke-amount"
          value={numPokemon}
          placeholder="10"
          onChange={(e) => setNumPokemon(e.target.value)}
          min="4"
          max="30"
        />
      </div>
      <div className="form-buttons flex">
        <button type="submit">Fetch Amount</button>
        <button type="submit">Refetch</button>
      </div>
    </form>
  );
}
