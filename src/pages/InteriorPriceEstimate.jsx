import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const bhkPrices = {
  '1BHK': 250000,
  '2BHK': 400000,
  '3BHK': 600000,
  '4BHK': 850000,
  'Villa': 1200000,
};

const InteriorPriceEstimate = () => {
  const [selectedBHK, setSelectedBHK] = useState(null);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Interior Price Estimate</h2>
      <p className="text-center text-muted mb-4">Select your home type to get an estimated interior cost.</p>

      <Row className="justify-content-center mb-4">
        {Object.keys(bhkPrices).map((type) => (
          <Col xs="auto" key={type}>
            <Button
              color={selectedBHK === type ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedBHK(type)}
              className="m-2"
            >
              {type}
            </Button>
          </Col>
        ))}
      </Row>

      {selectedBHK && (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm text-center">
              <CardBody>
                <CardTitle tag="h4" className="text-success">
                  Estimate for {selectedBHK}
                </CardTitle>
                <CardText className="display-5 fw-bold text-primary">
                  ₹{bhkPrices[selectedBHK].toLocaleString()}
                </CardText>
                <p className="text-muted">*This includes modular kitchen, false ceiling, wardrobes, and painting.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default InteriorPriceEstimate;
