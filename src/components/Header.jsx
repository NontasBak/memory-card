function Header() {
    return (
        <div className="header">
            <div className="title-container">
                <h1 className="title"></h1>
                <h2 className="description"></h2>
            </div>
            <div className="score-container">
                <h3 className="score"></h3>
                <h4 className="best-score"></h4>
            </div>
        </div>
    )
}

export default Header;