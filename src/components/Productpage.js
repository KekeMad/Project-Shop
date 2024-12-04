import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

import FrozaImage from '../Gamecovers/froza.jpg';
import GhostOfTsushimaImage from '../Gamecovers/ghost.jpeg';
import CyberpunkImage from '../Gamecovers/cyberpunk.jpg';
import SpiderManImage from '../Gamecovers/spiderman.jpg';
import StarfieldImage from '../Gamecovers/starfield.jpg';
import WitcherImage from '../Gamecovers/witcher.jpg';
import LastOfUsImage from '../Gamecovers/the last.png';

// Product details with imported images
const products = [
  { id: 1, name: "Froza Horizon 5", price: 700.00, platform: "Xbox series x/s", image: FrozaImage },
  { id: 2, name: "Ghost of Tsushima", price: 859.00, platform: "PlayStation 5", image: GhostOfTsushimaImage, },
  { id: 3, name: "Cyberpunk 2077", price: 600.00, platform: "Xbox series x/s", image: CyberpunkImage, },
  { id: 4, name: "Marvels Spider-man 2", price: 1099.00, platform: "PlayStation 5", image: SpiderManImage, },
  { id: 5, name: "Starfield", price: 500.00, platform: "Xbox series x/s", image: StarfieldImage, },
  { id: 6, name: "The Witcher 3: Wild Hunt", price: 800.00, platform: "Xbox series x/s", image: WitcherImage, },
  { id: 7, name: "The Last of Us Part II", price: 600.00, platform: "PlayStation 5", image: LastOfUsImage, },
];

function ProductPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <h2>Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.name} 
                style={{ width: '20%', height: '400px', objectFit: 'fill' }} 
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: R{product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductPage;
