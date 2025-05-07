import React from "react";
import { Row, Col, Button, Card as BootstrapCard } from "react-bootstrap";

interface VictoryMessageProps {
  moves: number;
  onPlayAgain: () => void;
}

const VictoryMessage: React.FC<VictoryMessageProps> = ({
  moves,
  onPlayAgain,
}) => {
  return (
    <Row className="justify-content-center mt-4">
      <Col xs={12} className="text-center">
        <BootstrapCard bg="success" text="white" className="mb-3">
          <BootstrapCard.Body>
            <h3>Congratulations!</h3>
            <p>You completed the game in {moves} moves!</p>
            <Button variant="light" onClick={onPlayAgain}>
              Play Again
            </Button>
          </BootstrapCard.Body>
        </BootstrapCard>
      </Col>
    </Row>
  );
};

export default VictoryMessage;
