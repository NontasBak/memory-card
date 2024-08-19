import "../styles/card.css";

function Card({
    name,
    imageUrl,
    clickedCards,
    setClickedCards,
    score,
    setScore,
    bestScore,
    setBestScore,
    setGameOver,
    setShowGameOver,
}) {
    function cardClickHandler() {
        if (clickedCards.includes(name)) {
            setClickedCards([]);
            setScore(0);
            setGameOver(true);
            setShowGameOver(true);
        } else {
            setClickedCards([...clickedCards, name]);
            setScore(score + 1);
            if (score + 1 > bestScore) {
                setBestScore(score + 1);
            }
        }
    }

    return (
        <button className="card" onClick={cardClickHandler}>
            <img src={imageUrl} alt={name} className="pokemon" />
        </button>
    );
}

export default Card;
