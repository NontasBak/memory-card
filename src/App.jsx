import { useState } from "react";
import "./styles/reset.css";
import "./styles/app.css";
import Header from "./components/Header";
import Game from "./components/Game";
import StartingScreen from "./components/StartingScreen";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [difficulty, setDifficulty] = useState(null);
    const [endingMessage, setEndingMessage] = useState(null);

    return (
        <div className="app">
            <Header score={score} bestScore={bestScore} />
            <main>
                {gameOver ? (
                    <StartingScreen
                        setDifficulty={setDifficulty}
                        setGameOver={setGameOver}
                        endingMessage={endingMessage}
                        setScore={setScore}
                    />
                ) : (
                    <Game
                        difficulty={difficulty}
                        score={score}
                        setScore={setScore}
                        bestScore={bestScore}
                        setBestScore={setBestScore}
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                        setEndingMessage={setEndingMessage}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
