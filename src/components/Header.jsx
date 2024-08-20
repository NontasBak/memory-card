import "../styles/header.css";
import pikachuImage from "../assets/pikachu-image.png";
import title from "../assets/title.png";

function Header({ score, bestScore }) {
    return (
        <div className="header">
            <img src={pikachuImage} alt="Pikachu" className="pikachu-image" />
            <div className="title-container">
                <img src={title} alt="Poke Memory" className="title" />
                <h2 className="description">
                    Don't click the same card twice!
                </h2>
            </div>
            <div className="score-container">
                <h4 className="best-score">Best Score: {bestScore}</h4>
                <h3 className="score">Score: {score}</h3>
            </div>
        </div>
    );
}

export default Header;
