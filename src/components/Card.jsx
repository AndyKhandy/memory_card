

export default function Card({id, name, sprites}){

    return (
        <div className="card grid">
            <img src={sprites.front_default}
            alt="picture of a pokemon..."/>
            <h1>{name.slice(0,12)}</h1>
        </div>
    )
}