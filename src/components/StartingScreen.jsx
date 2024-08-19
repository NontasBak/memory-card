import { useState } from "react";
import Game from "./Game";

function StartingScreen({
    setDifficulty,
    setGameOver,
    endingMessage,
    setScore,
}) {
    function startScreenButtonHandler(e) {
        setDifficulty(e.target.textContent.toLowerCase());
        setGameOver(false);
        setScore(0);
    }

    return (
        <div className="start-screen">
            {endingMessage === "game-over" ? (
                <div className="game-over">
                    <h1>Game Over</h1>
                    <p>Try Again?</p>
                </div>
            ) : (
                endingMessage === "game-won" && (
                    <div className="game-won">
                        <h1>You won!</h1>
                        <p>Play Again?</p>
                    </div>
                )
            )}
            <h1>Select Difficulty</h1>
            <div className="difficulty-buttons">
                <button onClick={startScreenButtonHandler}>Easy</button>
                <button onClick={startScreenButtonHandler}>Medium</button>
                <button onClick={startScreenButtonHandler}>Hard</button>
            </div>
        </div>
    );
}

export default StartingScreen;
