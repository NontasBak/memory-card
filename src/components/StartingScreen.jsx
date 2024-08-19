import { useState } from "react";
import Game from "./Game";

function StartingScreen() {
    const [difficulty, setDifficulty] = useState(null);

    function startScreenButtonHandler(e) {
        setDifficulty(e.target.textContent.toLowerCase());
    }

    if (difficulty) {
        return <Game difficulty={difficulty} />;
    }

    return (
        <div className="start-screen">
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
