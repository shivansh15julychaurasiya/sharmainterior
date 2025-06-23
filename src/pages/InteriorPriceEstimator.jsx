import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const estimatorOptions = [
  {
    title: 'Full Home',
    description: 'Get an approximate costing for your full home interiors.',
    icon: '/images/icon6.png',
    path: '/estimate/full-home',
  },
  {
    title: 'Kitchen',
    description: 'Get an approximate costing for your kitchen interior.',
    icon: '/images/icon6.png',
    path: '/estimate/kitchen',
  },
  {
    title: 'Wardrobe',
    description: 'Get an approximate costing for your wardrobe.',
    icon: '/images/icon6.png',
    path: '/estimate/wardrobe',
  },
];

function InteriorPriceEstimator() {

 
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="estimator-section py-5 bg-light" data-aos="fade-up">
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold">Interior Price Estimator</h2>
          <p className="text-muted">
            Calculate the approximate cost of doing up your interiors
          </p>
        </div>
        <Row className="justify-content-center">
          {estimatorOptions.map((item, index) => (
            <Col
              md="4"
              sm="6"
              xs="12"
              key={index}
              className="mb-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Card className="estimator-card border-0 shadow-sm rounded-4 h-100">
                <CardBody className="text-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3"
                    style={{ width: '60px', height: '60px' }}
                  />
                  <CardTitle tag="h5" className="mb-2 fw-bold">
                    {item.title}
                  </CardTitle>
                  <CardText className="text-muted mb-4">{item.description}</CardText>
                  <Button
                    color="danger"
                    className="rounded-pill px-4 py-2"
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
