import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, ListGroup, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useCartStore from '../../data/useCartStore';
import '../../style/checkout.css';
import PaymentOption from '../../components/PaymentOption';

const CheckoutPage = () => {
  const cartItems = useCartStore.use.cartItems()
  const [shippingMethod, setShippingMethod] = useState('free');
  const [paymentMethod, setPaymentMethod] = useState(null);

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
                    className='img-fluid bg-light-gray img-tool'
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
                <Col className="text-end">${totalDiscount}</Col>
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
            <h4 className='fm-archivo-semibold fs-14 text-black'>Payment details</h4>
            <p className='fm-archivo-Medium fs-12 text-dark-gray'>Complete your purchase by providing your payment details.</p>
            <h4 className='fm-archivo-semibold fs-14 text-black mb-3'>Shipping address</h4>
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
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="firstName">
                        <Form.Label className='fm-archivo-Medium fs-12'>First name</Form.Label>
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
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="lastName">
                        <Form.Label className='fm-archivo-Medium fs-12 text-black'>Last name</Form.Label>
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
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label className='fm-archivo-Medium fs-12 text-black'>Email address</Form.Label>
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
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="phone">
                        <Form.Label className='fm-archivo-Medium fs-12 text-black'>Phone number</Form.Label>
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
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="address">
                        <Form.Label className='fm-archivo-Medium fs-12 text-black'>Address</Form.Label>
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
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="city">
                        <Form.Label className='fm-archivo-Medium fs-12 text-black'>City</Form.Label>
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
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="region">
                        <Form.Label className='fm-archivo-Medium fs-12 text-black'>Region</Form.Label>
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
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="postalCode">
                        <Form.Label className='fm-archivo-Medium fs-12 text-black'>Postal code</Form.Label>
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
                    </Col>
                  </Row>

                  <Form.Group className='mt-3'>
                    <Form.Label className='fm-archivo-semibold fs-14 text-black'>Select payment method</Form.Label>
                    <Row>
                      <Col md={6}>
                        <PaymentOption
                          icon={<i className="credit-card" />}
                          label="Debit / Credit Card"
                          selected={paymentMethod === 'card'}
                          onClick={() => setPaymentMethod('card')}
                        />
                      </Col>
                      <Col md={6}>
                        <PaymentOption
                          icon={<i className="fa-university" />}
                          label="Virtual account"
                          selected={paymentMethod === 'virtual'}
                          onClick={() => setPaymentMethod('virtual')}
                        />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="cardNumber" className='mt-3'>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        name="cardNumber"
                        placeholder='Card number'
                        value={values.cardNumber}
                        onChange={handleChange}
                        isInvalid={touched.cardNumber && !!errors.cardNumber}
                        className='border-end-0 card-num fm-archivo text-black'
                      />
                      <InputGroup.Text className={`bg-transparent border-start-0 border-light-gray rounded-end-pill card-text`}>
                        <i className="fa-lock"></i>
                      </InputGroup.Text>
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {errors.cardNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row className='mt-3'>
                    <Col md={6}>
                      <Form.Group controlId="expirationDate">
                        <Form.Control
                          type="text"
                          name="expirationDate"
                          placeholder='Expiration date (MM/YY)'
                          value={values.expirationDate}
                          onChange={handleChange}
                          isInvalid={touched.expirationDate && !!errors.expirationDate}
                          className='fm-archivo'
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.expirationDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="securityCode">
                        <Form.Control
                          type="text"
                          name="securityCode"
                          value={values.securityCode}
                          onChange={handleChange}
                          isInvalid={touched.securityCode && !!errors.securityCode}
                          placeholder='securityCode'
                          className='fm-archivo'
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.securityCode}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      label="Use shipping address as billing address"
                      className='fm-archivo-Medium fs-12 mt-2'
                    />
                  </Form.Group>
                  <Row className="mt-4">
                    <Col className="d-flex justify-content-center">
                      <Button
                        variant="dark"
                        type="submit"
                        className="pay-button w-75 rounded-pill text-white"
                      >
                        Pay ${calculateTotal()} &rarr;
                      </Button>
                    </Col>
                  </Row>
                </Form>)}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutPage;


