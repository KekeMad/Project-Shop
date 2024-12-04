import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h1>Welcome to the Game Store!</h1>
          <p>Shop the latest Xbox and PlayStation games</p>
          <Link to="/products">
            <Button variant="primary">Browse Games</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
