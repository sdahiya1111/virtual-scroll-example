import './index.css';

function Card({name, genre}){
    return <div role="listitem" className="card">
        <h2>{name}</h2>
        <p>{genre}</p>
    </div>;
}

export default Card;