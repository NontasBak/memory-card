import "../styles/header.css";
import pikachuImage from "../assets/pikachu-image.png";

function Header({ score, bestScore }) {
    return (
        <div className="header">
            <img src={pikachuImage} alt="Pikachu" className="pikachu-image" />
            <div className="title-container">
                <h1 className="title">Poke Memory</h1>
                <h2 className="description">
                    Don't click the same card twice!
                </h2>
            </div>
            <div className="score-container">
                <h3 className="score">Score: {score}</h3>
                <h4 className="best-score">Best Score: {bestScore}</h4>
            </div>
        </div>
    );
}

export default Header;
