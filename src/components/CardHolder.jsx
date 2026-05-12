import Card from "./Card";

export default function CardHolder({ data, handleClick }) {
  return (
    <div id="card-holder" className="grid">
      {data.length &&
        data.map((pokemonData) => (
          <Card {...pokemonData} handleClick={handleClick} />
        ))}
    </div>
  );
}
