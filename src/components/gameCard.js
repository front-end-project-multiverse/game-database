function GameCard({ game }) {

    return (
        <div className="game-card">
            <div className="game-card__image">
                <img src={game.image} alt={game.name} />
            </div>
            <div className="game-card__info">
                <h3 className="game-card__title">{game.name}</h3>
                <p className="game-card__description">{game.description}</p>
            </div>
        </div>
    );
}