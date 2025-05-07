import { useState, useEffect } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import GameSetup from "./components/GameSetup";
import GameBoard from "./components/GameBoard";
import type { GameCard } from "./components/Card";

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

  return (
    <Container className="my-4">
      {!gameStarted ? (
        <GameSetup
          tempBigNumber={tempBigNumber}
          setTempBigNumber={setTempBigNumber}
          handleStartGame={handleStartGame}
        />
      ) : (
        <GameBoard
          bigNumber={bigNumber}
          cards={cards}
          moves={moves}
          matchedPairs={matchedPairs}
          totalPairs={totalPairs}
          onCardClick={handleCardClick}
          onNewGame={() => setGameStarted(false)}
        />
      )}
    </Container>
  );
}

export default App;
