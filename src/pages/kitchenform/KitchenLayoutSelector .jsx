import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const kitchenLayouts = [
  { label: 'L-shaped', image: '/images/klshape.png' },
  { label: 'Straight', image: '/images/kpshape.png' },
  { label: 'U-shaped', image: '/images/kstraight.png' },
  { label: 'Parallel', image: '/images/kushape.png' }, // Optional extra
];

const KitchenLayoutSelector = ({ onNext, onBack }) => {
  const [selectedLayout, setSelectedLayout] = useState('');

  const handleNext = () => {
    if (selectedLayout) {
      // Save selection to context or parent state if needed
      onNext();
    }
  };

  return (
    <Container className="mt-5">
      {/* Step Header */}
      <div className="text-center mb-4">
        <h4 className="fw-bold">Select the layout of your kitchen</h4>
        <p className="text-muted">Want to know more? <a href="#">Check here</a></p>
      </div>

      {/* Layout Cards */}
      <Row className="justify-content-center">
        {kitchenLayouts.map((layout, index) => (
          <Col md="3" sm="6" xs="12" className="mb-4" key={index}>
            <Card
              className={`text-center shadow-sm layout-card ${
                selectedLayout === layout.label ? 'border-danger border-2' : ''
              }`}
              onClick={() => setSelectedLayout(layout.label)}
              style={{ cursor: 'pointer' }}
            >
              <CardImg top src={layout.image} alt={layout.label} style={{ padding: '20px', height: '150px', objectFit: 'contain' }} />
              <CardBody>
                <CardTitle tag="h6" className="fw-semibold">{layout.label}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4" style={{ maxWidth: '500px', margin: 'auto' }}>
        <Button color="light" onClick={onBack} className="px-4">Back</Button>
        <Button color="danger" onClick={handleNext} className="px-5" disabled={!selectedLayout}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default KitchenLayoutSelector;
