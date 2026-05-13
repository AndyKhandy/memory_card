export default function PokeForm({ numPokemon, setNumPokemon, handleForm }) {
  return (
    <form onSubmit={handleForm} className="flex">
      <div className="input flex gap">
        <label htmlFor="pokeAmount">Pokemon Amount:</label>
        <input
          type="number"
          id="pokeAmount"
          value={numPokemon}
          placeholder="10"
          onChange={(e) => setNumPokemon(e.target.value)}
          min="1"
          max="20"
        />
      </div>
      <div className="form-buttons flex gap">
        <button type="submit">Submit Amount</button>
        <button type="submit">Refetch</button>
      </div>
    </form>
  );
}
