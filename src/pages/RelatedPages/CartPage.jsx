import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../../style/cartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-Shirt",
      color: "Green",
      size: "Large",
      price: 87,
      quantity: 2,
      imageUrl: "/src/assets/hero.jpg",
    },
    {
      id: 2,
      name: "Men's Dri-FIT Golf Jacket",
      color: "Ocean",
      size: "Large",
      price: 100,
      quantity: 1,
      imageUrl: "/src/assets/hero.jpg",
    },
    {
      id: 3,
      name: "Tatum 2 'Red Cement'",
      size: "15",
      price: 125,
      quantity: 2,
      imageUrl: "/src/assets/hero.jpg",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <Row className="my-5">
        <Col md={8}>
          <h2>Cart({cartItems.length})</h2>
          <Button variant="outline-danger" onClick={handleClearCart} className="mb-3">
            <i className="bi bi-trash" /> Clear Cart
          </Button>
          {cartItems.map(item => (
            <Row key={item.id} className="align-items-center mb-3">
              <Col md={2}>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100%', borderRadius: '10px' }} />
              </Col>
              <Col md={4}>
                <h5>{item.name}</h5>
                <p>{item.color} - {item.size}</p>
                <p>${item.price}</p>
              </Col>
              <Col md={3} className="d-flex align-items-center">
                <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                <Form.Control value={item.quantity} readOnly className="text-center mx-2" style={{ width: '50px' }} />
                <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                <Button variant="outline-danger" onClick={() => handleRemoveItem(item.id)} className="ms-2">
                  <i className="bi bi-trash" />
                </Button>
              </Col>
              <Col md={3}>
                <h5>${item.price * item.quantity}.00</h5>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <div className="p-3 border rounded">
            <h4>Order summary</h4>
            <p>Subtotal: ${calculateTotal()}</p>
            <p>Discount: $0</p>
            <h5>Order total: ${calculateTotal()}</h5>
            <Button variant="dark" className="w-100">Checkout now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
