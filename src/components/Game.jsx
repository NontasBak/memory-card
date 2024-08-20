import Card from "./Card";
import "../styles/game.css";
import { useEffect, useState } from "react";
import getPokemon from "../utils/data.js";
import { v4 as uuidv4 } from "uuid";

function Game({
    difficulty,
    score,
    setScore,
    bestScore,
    setBestScore,
    gameOver,
    setGameOver,
    setEndingMessage,
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    let cardCount;
    const pokemon = getPokemon(difficulty);
    switch (difficulty) {
        case "easy":
            cardCount = 6;
            break;
        case "medium":
            cardCount = 8;
            break;
        case "hard":
            cardCount = 12;
            break;
    }

    async function downloadImage(src) {
        const response = await fetch(src);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    async function fetchData(pokemon, cardCount) {
        const newData = [];
        for (let i = 0; i < cardCount; i++) {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon[i]}`
            );
            const data = await response.json();
            const imageUrl =
                data.sprites.other["official-artwork"].front_default;
            newData.push({ name: pokemon[i], imageUrl, id: uuidv4() });
        }

        return newData;
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData(pokemon, cardCount).then((data) => {
            //download image and change url
            const UrlPromises = data.map(async (item) => {
                const newUrl = await downloadImage(item.imageUrl);
                item.imageUrl = newUrl;
            });

            Promise.all(UrlPromises).then(() => {
                setData(data);
                setIsLoading(false);
            });
        });
    }, []);

    const shuffledData = [...data].sort(() => Math.random() - 0.5);

    return (
        <div className={"game " + (isLoading ? "is-loading" : "loaded")}>
            {isLoading ? (
                <h1 className="loading">Loading...</h1>
            ) : (
                shuffledData.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            clickedCards={clickedCards}
                            setClickedCards={setClickedCards}
                            score={score}
                            setScore={setScore}
                            bestScore={bestScore}
                            setBestScore={setBestScore}
                            setGameOver={setGameOver}
                            setEndingMessage={setEndingMessage}
                            totalCardCount={cardCount}
                        />
                    );
                })
            )}
        </div>
    );
}

export default Game;
