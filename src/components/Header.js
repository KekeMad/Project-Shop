import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

function Header() {
  const user = useSelector((state) => state.user); // Get user info from the store

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Game Store
      </Navbar.Brand>
      <Nav className="ml-auto">
        {user ? (
          <Nav.Link as={Link} to="/landing">Hi {user.username}</Nav.Link> // Display username if user is logged in
        ) : (
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        )}
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
