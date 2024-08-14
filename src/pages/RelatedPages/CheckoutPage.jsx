import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, ListGroup, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useCartStore from '../../data/useCartStore';
import '../../style/checkout.css';

const CheckoutPage = () => {
  const cartItems = useCartStore.use.cartItems()
  const [shippingMethod, setShippingMethod] = useState('free');

  const handleShippingChange = (event) => {
    setShippingMethod(event.target.value);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const discountPrice = item.promo ? item.price - (item.price * (item.discount / 100)) : item.price;
      return total + discountPrice * item.quantity;
    }, 0);
  };

  const totalDiscount = cartItems.reduce((totalDiscount, item) => {
    if (item.promo) {
      const discountAmount = (item.price * (item.discount / 100)) * item.quantity;
      return totalDiscount + discountAmount;
    }
    return totalDiscount;
  }, 0);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('Region is required'),
    postalCode: Yup.string().required('Postal code is required'),
    cardNumber: Yup.string().required('Card number is required'),
    expirationDate: Yup.string().required('Expiration date is required'),
    securityCode: Yup.string().required('Security code is required'),
  });

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2 className="fm-Chillax-Semibold text-black fs-4">Checkout</h2>
          <h5 className='fm-archivo-semibold text-black fs-14'>Your Order</h5>
          <p className='fm-archivo-Medium text-dark-gray fs-12'>By placing your order, you agree to Ballamas <a href="#" className='text-black text-decoration-underline fs-12'>Privacy</a> and <a href="#" className='text-black text-decoration-underline fs-12'>Policy</a>.</p>
          <hr />
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              <li
                key={item.id}
                className="d-flex align-items-center justify-content-between m-0 mb-4"
              >
                <div className='d-flex align-items-center'>
                  <img
                    src={`/${item.image}`}
                    alt={item.title}
                    className='img-fluid bg-success img-tool'
                  />
                  <div className='ms-2'>
                    <h4 className='fm-archivo-semibold m-0 mb-2 text-black fs-14'>{item.title}</h4>
                    <p className='fm-archivo-Medium text-dark-gray m-0 fs-12 text-capitalize'>Color: {item.color} - Size: {item.size}</p>
                  </div>
                </div>
                <p className='fm-archivo-semibold fs-14 text-black'>${item.price}</p>
              </li>

            ))
            }
          </ListGroup>

          <h5 className='m-0 text-black fs-12 fm-archivo-Medium' >Discount Code</h5>
          <InputGroup className="mt-2 mb-1 w-75">
            <Form.Control placeholder="Add discount code" className='input-code rounded-pill px-3 me-3' />
            <Button variant="dark" className='bg-black text-white fm-archivo-semibold fs-14  rounded-pill apply'>Apply</Button>
          </InputGroup>
          <h5 className='fm-archivo-Medium fs-12 text-dark-gray'><span className='text-black'>New customer? Signup</span> to get better offer</h5>

          <ListGroup className="mt-3">
            <ListGroup.Item className='px-0 border-0'>
              <Row className='fm-archivo-Medium text-dark-gray fs-14 mb-2'>
                <Col>Subtotal</Col>
                <Col className="text-end">${calculateTotal()}</Col>
              </Row>
              <Row className='fm-archivo-Medium text-dark-gray fs-14  mb-2'>
                <Col>Discount</Col>
                <Col className="text-end">{totalDiscount}%</Col>
              </Row>
              <hr />
              <Row className='fm-archivo-semibold text-black fs-14'>
                <Col>Order Total</Col>
                <Col className="text-end">${calculateTotal()}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          <Form.Group className='mt-4'>
            <Form.Label className='fm-archivo-semibold fs-14'>Shipping method</Form.Label>
            <div className="shipping-options">
              <div className={`shipping-option ${shippingMethod === 'free' ? 'checked' : ''}`}>
                <Form.Check
                  type="radio"
                  label=""
                  value="free"
                  checked={shippingMethod === 'free'}
                  onChange={handleShippingChange}
                />
                <div className="option-details">
                  <p className="shipping-option-title fm-archivo-Medium text-black fs-14">Free shipping</p>
                  <p className="shipping-details fm-archivo-Medium text-dark-gray fs-12">7-30 business days</p>
                </div>
                <span className="shipping-cost fm-archivo-Medium text-black fs-14">$0</span>
              </div>

              <div className={`shipping-option ${shippingMethod === 'regular' ? 'checked' : ''}`}>
                <Form.Check
                  type="radio"
                  label=""
                  value="regular"
                  checked={shippingMethod === 'regular'}
                  onChange={handleShippingChange}
                />
                <div className="option-details">
                  <p className="shipping-option-title fm-archivo-Medium text-black fs-14">Regular shipping</p>
                  <p className="shipping-details fm-archivo-Medium text-dark-gray fs-12">3-14 business days</p>
                </div>
                <span className="shipping-cost fm-archivo-Medium text-black fs-14">$7.50</span>
              </div>

              <div className={`shipping-option ${shippingMethod === 'express' ? 'checked' : ''}`}>
                <Form.Check
                  type="radio"
                  label=""
                  value="express"
                  checked={shippingMethod === 'express'}
                  onChange={handleShippingChange}
                />
                <div className="option-details">
                  <p className="shipping-option-title fm-archivo-Medium text-black fs-14">Express shipping</p>
                  <p className="shipping-details fm-archivo-Medium text-dark-gray fs-12">1-3 business days</p>
                </div>
                <span className="shipping-cost fm-archivo-Medium text-black fs-14">$22.50</span>
              </div>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <div className="payment-details">
            <h4 className='fm-archivo-semibold fs-14'>Payment details</h4>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                region: '',
                postalCode: '',
                cardNumber: '',
                expirationDate: '',
                securityCode: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Form values:', values);
                // Logique pour soumettre la commande
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                touched,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={touched.firstName && !!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={touched.lastName && !!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="phone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      isInvalid={touched.phone && !!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      isInvalid={touched.address && !!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isInvalid={touched.city && !!errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="region">
                    <Form.Label>Region</Form.Label>
                    <Form.Control
                      type="text"
                      name="region"
                      value={values.region}
                      onChange={handleChange}
                      isInvalid={touched.region && !!errors.region}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.region}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="postalCode">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={values.postalCode}
                      onChange={handleChange}
                      isInvalid={touched.postalCode && !!errors.postalCode}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.postalCode}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="cardNumber">
                    <Form.Label>Card number</Form.Label>
                    <Form.Control
                      type="text"
                      name="cardNumber"
                      value={values.cardNumber}
                      onChange={handleChange}
                      isInvalid={touched.cardNumber && !!errors.cardNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cardNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="expirationDate">
                    <Form.Label>Expiration date (MM/YY)</Form.Label>
                    <Form.Control
                      type="text"
                      name="expirationDate"
                      value={values.expirationDate}
                      onChange={handleChange}
                      isInvalid={touched.expirationDate && !!errors.expirationDate}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expirationDate}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="securityCode">
                    <Form.Label>securityCode</Form.Label>
                    <Form.Control
                      type="text"
                      name="securityCode"
                      value={values.securityCode}
                      onChange={handleChange}
                      isInvalid={touched.securityCode && !!errors.securityCode}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.securityCode}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>)}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutPage;


