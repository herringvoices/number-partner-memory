import React from "react";

// Define the card type for our game
export interface GameCard {
  id: number;
  value: number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface CardProps {
  card: GameCard;
  onClick: (card: GameCard) => void;
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      className={`card-container ${card.isFlipped ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={() => onClick(card)}
    >
      <div className="memory-card">
        <div className="card-back">
          <img src="/back.png" alt="Card Back" />
        </div>
        <div className="card-front">
          <div className="number-display">{card.value}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
