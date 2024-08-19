function Card({ name, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} className="pokemon" />
        </div>
    );
}

export default Card;
