export default function Card({ id, name, sprites, handleClick }) {
  return (
    <div className="card grid" onClick={() => handleClick(id)}>
      <img src={sprites.front_default} alt="picture of a pokemon..." />
      <h1>{name.slice(0, 12)}</h1>
    </div>
  );
}
