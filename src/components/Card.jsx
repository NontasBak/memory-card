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
    setEndingMessage,
    totalCardCount,
}) {
    function cardClickHandler() {
        if (clickedCards.includes(name)) {
            setClickedCards([]);
            setScore(0);
            setGameOver(true);
            setEndingMessage("game-over");
        } else {
            setClickedCards([...clickedCards, name]);

            const newScore = score + 1;
            setScore(newScore);
            if (newScore > bestScore) {
                setBestScore(newScore);
            }

            if (newScore === totalCardCount) {
                setGameOver(true);
                setEndingMessage("game-won");
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
