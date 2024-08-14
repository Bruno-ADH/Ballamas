import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../../style/cartPage.css';
import useCartStore from '../../data/useCartStore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useCartStore.use.cartItems()
  const handleIncrement = useCartStore.use.incrementQuantity()
  const handleDecrement = useCartStore.use.decrementQuantity()
  const handleClearCart = useCartStore.use.resetCart()
  const handleRemoveItem = useCartStore.use.removeFromCart()

  const totalDiscount = cartItems.reduce((totalDiscount, item) => {
    if (item.promo) {
      const discountAmount = (item.price * (item.discount / 100)) * item.quantity;
      return totalDiscount + discountAmount;
    }
    return totalDiscount;
  }, 0);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const discountPrice = item.promo ? item.price - (item.price * (item.discount / 100)) : item.price;
      return total + discountPrice * item.quantity;
    }, 0);
  };

  return (
    <Container className='pt-3'>

      <Row className="my-5 gap-3 gap-lg-0">
        <Col md={8}>
          <Row className='d-flex flex-row align-items-center justify-content-between mb-4'>
            <h2 className='fm-Chillax-Semibold w-auto fs-4 text-black'>Cart({cartItems.length})</h2>
            <Button onClick={handleClearCart} className="w-auto fm-archivo-Medium text-dark-gray bg-light-gray border-0 rounded-pill">
              <img src="/src/assets/icons/trashClear.svg" alt="" /> Clear Cart
            </Button>
          </Row>
          <Row className='fm-archivo-Medium text-dark-gray'>
            <Col xs={6} sm={6} md={6} ><span>Product</span></Col>
            <Col xs={6} sm={6} md={6} className='d-flex flex-nowrap text-center ps-lg-5 gap-3'>
              <span className='w-auto ms-lg-5'>Quantity</span> <span className='ms-auto w-auto me-3'>Price</span>
            </Col>
          </Row>
          {cartItems.length === 0 && (
            <div className='text-center my-5'>
              <h4 className='text-dark-gray fm-archivo-semibold'>Your cart is empty</h4>
            </div>
          )}
          {cartItems.length > 0 &&
            cartItems.map(item => (
              <Row key={item.id} className="border-0 border-top border-light-gray align-items-center mb-3 pt-3">
                <Col xs={2} md={2} className=''>
                  <img src={`/${item.image}`} alt={item.title} className='img-fluid product-img rounded-2' />
                </Col>
                <Col xs={3} md={4} className='ps-0'>
                  <h5 className='fm-archivo-semibold text-black product-title my-0 text-capitalize'>{item.title}</h5>
                  <p className='fm-archivo-Medium product-size text-dark-gray my-0 text-capitalize'>{item.color} - {item.size}</p>
                  <p className='fm-archivo-semibold text-black product-price my-0 text-capitalize'>${item.price}</p>
                </Col>
                <Col xs={3} md={3} className="ms-lg-auto d-flex align-items-center gap-0 gap-lg-2 p-0">
                  <div className='d-flex align-items-center bg-light-gray rounded-pill p-1 px-2'>
                    <Button className='bg-transparent p-0 border-0 decrement-bouton' onClick={() => handleDecrement(item.id)}></Button>
                    <Form.Control value={item.quantity} readOnly className="text-center mx-2 bg-transparent border-0" style={{ width: '50px' }} />
                    <Button className='bg-transparent p-0 border-0 add-bouton' onClick={() => handleIncrement(item.id)}></Button>
                  </div>
                  <div className='d-flex justify-content-center align-items-center trash-wrapper'>
                    <Button onClick={() => handleRemoveItem(item.id)} className="bg-transparent border-0 trash-bouton text-black">
                    </Button>
                  </div>
                </Col>
                <Col xs={3} md={3} className='ms-auto w-auto'>
                  <h5 className='mb-0 fm-archivo-semibold total-price'>${item.price * item.quantity}.00</h5>
                </Col>
              </Row>
            ))
          }

        </Col>
        <Col md={4}>
          <div className="p-3 border border-light-gray rounded-4 p-3 px-4">
            <h4 className='fm-archivo-semibold mb-0 mb-4 summary-title'>Order summary</h4>
            <p className='text-dark-gray d-flex mb-0 fm-archivo-Medium subtotal'>Subtotal: <span className='w-100 text-end'>${calculateTotal()}</span></p>
            <p className='border-0 pb-2 border-bottom border-light-gray text-dark-gray d-flex fm-archivo-Medium discount'>Discount: <span className='w-100 text-end'>${totalDiscount}</span></p>
            <h5 className='fm-archivo-semibold text-black order d-flex'><span className='order-span'>Order total:</span> <span className='w-100 text-end'>${calculateTotal()}</span></h5>
            <motion.div
              className='h-auto m-0 w-100'
              whileTap={{ scale: 0.95 }}
            >
              <Button as={Link} to="/checkout" variant="dark" className="w-100 mt-2 checkout bg-black rounded-pill text-white hover-dark">Checkout now</Button>
            </motion.div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
