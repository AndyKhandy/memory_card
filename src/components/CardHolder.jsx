import Card from "./Card";

export default function CardHolder({ data}) {

  return (
    <div id="card-holder" className="grid">
      {data.length && data.map((pokemonData) => <Card {...pokemonData} />)}
    </div>
  );
}
