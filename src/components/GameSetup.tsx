import React from "react";
import { Row, Col, Button, Form, Card as BootstrapCard } from "react-bootstrap";

interface GameSetupProps {
  tempBigNumber: string;
  setTempBigNumber: (value: string) => void;
  handleStartGame: () => void;
}

const GameSetup: React.FC<GameSetupProps> = ({
  tempBigNumber,
  setTempBigNumber,
  handleStartGame,
}) => {
  return (
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
};

export default GameSetup;
