import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const estimatorOptions = [
  {
    title: 'Full Home',
    description: 'Get an approximate costing for your full home interiors.',
    icon: "/images/icon6.png", // Replace with real icon
    path: '/estimate/full-home'
  },
  {
    title: 'Kitchen',
    description: 'Get an approximate costing for your kitchen interior.',
    icon: '/images/icon6.png',
    path: '/estimate/kitchen'
  },
  {
    title: 'Wardrobe',
    description: 'Get an approximate costing for your wardrobe.',
    icon: '/images/icon6.png',
    path: '/estimate/wardrobe'
  },
];

function InteriorPriceEstimator() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="estimator-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="title">Interior Price Estimator</h2>
          <p className="subtitle">
            Calculate the approximate cost of doing up your interiors
          </p>
        </div>
        <Row className="justify-content-center">
          {estimatorOptions.map((item, index) => (
            <Col md="4" sm="6" xs="12" key={index} className="mb-4">
              <Card className="estimator-card shadow-sm">
                <CardBody className="text-center">
                  <img src={item.icon} alt={item.title} className="estimator-icon mb-3" />
                  <CardTitle tag="h5" className="mb-2 fw-bold">{item.title}</CardTitle>
                  <CardText className="mb-4">{item.description}</CardText>
                  <Button
                    color="danger"
                    className="rounded-pill px-5 py-2"
                    onClick={() => handleRedirect(item.path)}
                  >
                    CALCULATE <span className="ms-2">&gt;</span>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default InteriorPriceEstimator;
