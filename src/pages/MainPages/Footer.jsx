import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../style/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="bg-black text-white fm-archivo"
    >
      <Container className='px-4 px-md-1'>
        <Row className='justify-content-between'>
          <Col md={8} lg={5} className="px-0">
            <span className="ballamas-white"></span>
            <p className="fm-archivo-Medium newsletter my-3">Subscribe to our newsletter for upcoming products and best discount for all items</p>
            <Form className="d-flex gap-2">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="bg-transparent text-white rounded-5 border-white"
              />
              <motion.div
                className='h-auto m-0 '
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                <Button
                  variant="light"
                  className='rounded-5 px-4 h-100'
                >
                  Subscribe
                </Button>
              </motion.div>
            </Form>
          </Col>
          <Col md={12} lg={6} className="px-0">
            <Row className="mt-4 mt-lg-0 justify-content-center justify-content-md-start  justify-content-lg-end gap-4">
              <Col xs={3} lg={2} className="mb-3">
                <h6 className="fm-archivo-Medium">Product</h6>
                <ul className="list-unstyled">
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link' >Jacket</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>T-Shirt</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Shoes</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Sunglasses</motion.li></Link>
                </ul>
              </Col>
              <Col xs={3} lg={2} className="mb-3">
                <h6 className="fm-archivo-Medium">Categories</h6>
                <ul className="list-unstyled">
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Man</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Woman</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Kids</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Gift</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>New arrival</motion.li></Link>
                </ul>
              </Col>
              <Col xs={3} lg={3} className="mb-3 px-0 ps-1">
                <h6 className="fm-archivo-Medium">Our Social Media</h6>
                <ul className="list-unstyled">
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Instagram</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Facebook</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>Youtube</motion.li></Link>
                  <Link to="/"><motion.li whileHover={{ scale: 1.02 }} className='text-gray footer-link'>X</motion.li></Link>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-dark-gray text-center copyright">
            &copy; BALLAMAS 2024 by waris
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
