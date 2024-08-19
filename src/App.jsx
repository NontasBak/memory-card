import { useState } from "react";
import "./styles/app.css";
import Header from "./components/Header";
import Game from "./components/Game";
import StartingScreen from "./components/StartingScreen";

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <StartingScreen />
            </main>
        </div>
    );
}

export default App;
