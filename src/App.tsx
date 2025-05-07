import { useState, useEffect } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card as BootstrapCard,
} from "react-bootstrap";

// Define the card type for our game
interface GameCard {
  id: number;
  value: number;
  isFlipped: boolean;
  isMatched: boolean;
}

function App() {
  const [bigNumber, setBigNumber] = useState<number>(10);
  const [tempBigNumber, setTempBigNumber] = useState<string>("10");
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<GameCard[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [totalPairs, setTotalPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  // Initialize the game when bigNumber changes or game starts
  useEffect(() => {
    if (gameStarted) {
      initializeGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted]);

  // Function to initialize the game
  const initializeGame = () => {
    // Create pairs of cards from 0 to bigNumber
    const cardValues: number[] = [];
    for (let i = 0; i <= bigNumber; i++) {
      cardValues.push(i);
      cardValues.push(i);
    }

    // Shuffle the cards
    const shuffledCards = shuffle(cardValues).map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setTotalPairs(bigNumber + 1); // 0 through bigNumber = (bigNumber + 1) pairs
    setMoves(0);
  };

  // Fisher-Yates shuffle algorithm
  const shuffle = (array: number[]): number[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Handle card click
  const handleCardClick = (card: GameCard) => {
    // Don't allow clicking if the card is already flipped or matched
    if (card.isFlipped || card.isMatched || flippedCards.length >= 2) {
      return;
    }

    // Flip the card
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );

    const updatedFlippedCards = [...flippedCards, card];
    setCards(updatedCards);
    setFlippedCards(updatedFlippedCards);

    // Check if we have two cards flipped
    if (updatedFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstCard, secondCard] = updatedFlippedCards;

      // Check if their sum equals the bigNumber
      if (firstCard.value + secondCard.value === bigNumber) {
        // It's a match!
        setTimeout(() => {
          setCards((currentCards) =>
            currentCards.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isMatched: true }
                : c
            )
          );
          setFlippedCards([]);
          setMatchedPairs((prev) => prev + 1);
        }, 1000);
      } else {
        // Not a match, flip them back
        setTimeout(() => {
          setCards((currentCards) =>
            currentCards.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Handle start game button click
  const handleStartGame = () => {
    // Validate big number
    const number = parseInt(tempBigNumber);
    if (isNaN(number) || number < 1) {
      alert("Please enter a valid number greater than 0");
      return;
    }

    setBigNumber(number);
    setGameStarted(true);
  };

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

  // Game input form
  const renderGameSetup = () => (
    <Row className="justify-content-center my-4">
      <Col xs={12} md={6} className="text-center">
        <BootstrapCard className="shadow-sm bg-light">
          <BootstrapCard.Body>
            <BootstrapCard.Title className="mb-4">
              Number Partner Memory
            </BootstrapCard.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Choose a Big Number:</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={tempBigNumber}
                  className="text-center w-auto mx-auto fs-2 border-1 border-primary rounded"
                  onChange={(e) => setTempBigNumber(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Cards will contain numbers from 0 to your chosen number.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" onClick={handleStartGame}>
                Start Game
              </Button>
            </Form>
          </BootstrapCard.Body>
        </BootstrapCard>
      </Col>
    </Row>
  );

  // Game board with cards
  const renderGameBoard = () => {
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
              onClick={() => setGameStarted(false)}
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
                <div
                  key={card.id}
                  className={`card-container ${
                    card.isFlipped ? "flipped" : ""
                  } ${card.isMatched ? "matched" : ""}`}
                  onClick={() => handleCardClick(card)}
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
              ))}
            </div>
          </Col>
        </Row>

        {matchedPairs === totalPairs && (
          <Row className="justify-content-center mt-4">
            <Col xs={12} className="text-center">
              <BootstrapCard bg="success" text="white" className="mb-3">
                <BootstrapCard.Body>
                  <h3>Congratulations!</h3>
                  <p>You completed the game in {moves} moves!</p>
                  <Button variant="light" onClick={() => setGameStarted(false)}>
                    Play Again
                  </Button>
                </BootstrapCard.Body>
              </BootstrapCard>
            </Col>
          </Row>
        )}
      </>
    );
  };

  return (
    <Container className="my-4">
      {!gameStarted ? renderGameSetup() : renderGameBoard()}
    </Container>
  );
}

export default App;
