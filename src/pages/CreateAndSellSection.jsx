import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/createAndSellSection.css';
import { motion } from 'framer-motion';
import useSellesStore from '../data/SellsStore';

const CreateAndSellSection = () => {

  const steps = useSellesStore.use.sells()

  return (
    <section id="create">
      <Container className="create-and-sell py-5">
      <h2 className="text-start fw-bold">Create and Sell Now</h2>
      <Row className="gy-4">
        {steps.map((step, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <Card className="step-card text-center h-100 bg-neutral-50 p-1">
              <Card.Body>
                <div className="icon-container me-auto mb-3 bg-neutral-600">
                  <img src={step.icon} alt="Icon" className="img-fluid" />
                  </div>
                <Card.Title className="text-neutral-800 fw-bold text-start">{step.title}</Card.Title>
                <Card.Text className="text-neutral-400 fw-medium text-start detail">{step.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
};

export default CreateAndSellSection;
