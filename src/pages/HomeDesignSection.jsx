import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function HomeDesignSection() {
  return (
    <div>
      {/* Top Section */}
      <div className="home-design-top text-center">
        <Container>
          <h2 className="title">The home design you crave</h2>
          <p className="subtitle">
            When you give your home to Sharma-Interior touch, you get both beauty and functionality. We
            employ state-of-the-art technology to ensure your home features a flawless look that
            lasts a very long time.
          </p>
          <Button color="danger" className="consult-btn " >
            BOOK FREE CONSULTATION
          </Button>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="stats-section text-white text-center">
        <Container>
          <h3 className="stats-heading">Let our numbers do the talking!</h3>
          <Row className="mt-4">
            <Col xs="6" md="3">
              <h2>100000 +</h2>
              <p>#SharmaInterior</p>
            </Col>
            <Col xs="6" md="3">
              <h2>3500 +</h2>
              <p>designers</p>
            </Col>
            <Col xs="6" md="3">
              <h2>40</h2>
              <p>cities</p>
            </Col>
            <Col xs="6" md="3">
              <h2>4</h2>
              <p>countries</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeDesignSection;
