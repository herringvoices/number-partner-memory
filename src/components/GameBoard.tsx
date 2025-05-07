import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Card, { type GameCard } from "./Card";
import VictoryMessage from "./VictoryMessage";

interface GameBoardProps {
  bigNumber: number;
  cards: GameCard[];
  moves: number;
  matchedPairs: number;
  totalPairs: number;
  onCardClick: (card: GameCard) => void;
  onNewGame: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  bigNumber,
  cards,
  moves,
  matchedPairs,
  totalPairs,
  onCardClick,
  onNewGame,
}) => {
  // Calculate grid dimensions based on number of cards
  const getGridDimensions = () => {
    const totalCards = (bigNumber + 1) * 2;
    let cols = 4; // Default

    if (totalCards <= 12) cols = 4;
    else if (totalCards <= 20) cols = 5;
    else if (totalCards <= 30) cols = 6;
    else cols = 8;

    return cols;
  };

  const cols = getGridDimensions();

  return (
    <>
      <Row className="justify-content-center mb-3">
        <Col xs={12} className="text-center">
          <h2>Number Partner Memory</h2>
          <p>
            Find pairs of numbers that add up to {bigNumber}. Moves: {moves} |
            Pairs: {matchedPairs}/{totalPairs}
          </p>
          <Button
            variant="outline-secondary"
            className="mb-3"
            onClick={onNewGame}
          >
            New Game
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <div
            className="game-board"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: "10px",
            }}
          >
            {cards.map((card) => (
              <Card key={card.id} card={card} onClick={onCardClick} />
            ))}
          </div>
        </Col>
      </Row>

      {matchedPairs === totalPairs && (
        <VictoryMessage moves={moves} onPlayAgain={onNewGame} />
      )}
    </>
  );
};

export default GameBoard;
