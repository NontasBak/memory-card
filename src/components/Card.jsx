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

    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <button className="card" onClick={cardClickHandler}>
            <img src={imageUrl} alt={name} className="pokemon" />
            <h3 className="pokemon-name">{nameCapitalized}</h3>
        </button>
    );
}

export default Card;
