import React, { useState } from "react";
import { useSelector, } from "react-redux";
import { Button, Container, Row, Col, ListGroup, Form, Modal } from "react-bootstrap";

function CartPage() {
  const cart = useSelector((state) => state.cart);

  // Define shipping costs for each method
  const shippingCosts = {
    Standard: 0,
    Express: 100,
    "Next Day": 200,
  };

  // Calculate the total price of the cart items (without shipping)
  const totalWithoutShipping = cart.reduce((acc, item) => acc + item.price, 0);

  // Local state for the selected shipping method and modal visibility
  const [shippingMethod, setShippingMethod] = useState("Standard");
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Handle the change in shipping 
  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  // Calculate the total price including the selected shipping method
  const total = totalWithoutShipping + shippingCosts[shippingMethod];

  const handleShowHelp = () => {
    setShowHelpModal(true);
  };

  const handleCloseHelp = () => {
    setShowHelpModal(false);
  };

  return (
    <Container>
      {/* Cart Page Title */}
      <h2>Your Cart</h2>

      <Row>
        <Col>
          {/* Display the list of items in the cart */}
          <ListGroup>
            {cart.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.name} - R{item.price}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Display the total price of the cart without shipping */}
          <h4>Total: R{totalWithoutShipping.toFixed(2)}</h4>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* Section for choosing a shipping method */}
          <h4>Choose Shipping Method</h4>
          <Form>
            {/* Radio buttons to select the shipping method */}
            <Form.Check
              type="radio"
              label="Standard Shipping:  R0.00"
              value="Standard"
              checked={shippingMethod === "Standard"}
              onChange={handleShippingChange}
            />
            <Form.Check
              type="radio"
              label="Express Shipping:  R100.00"
              value="Express"
              checked={shippingMethod === "Express"}
              onChange={handleShippingChange}
            />
            <Form.Check
              type="radio"
              label="Next Day Shipping:  R200.00"
              value="Next Day"
              checked={shippingMethod === "Next Day"}
              onChange={handleShippingChange}
            />
          </Form>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          {/* Button to show the help modal */}
          <Button variant="primary" onClick={handleShowHelp}>
            Need Help with Shipping Options?
          </Button>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          {/* Button to proceed to checkout */}
          <Button variant="success">Proceed to Checkout</Button>
        </Col>
      </Row>

      <Modal show={showHelpModal} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>Help with Shipping Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Here are the available shipping options:</p>
          <ul>
            {/* Description of the available shipping methods */}
            <li><strong>Standard Shipping:</strong> 5-7 business days: R0</li>
            <li><strong>Express Shipping:</strong> 2-3 business days: R100</li>
            <li><strong>Next Day Shipping:</strong> Next business day delivery: R200</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Display the total price including shipping */}
      <Row className="mt-3">
        <Col>
          <h4>Total with Shipping: R{total.toFixed(2)}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
