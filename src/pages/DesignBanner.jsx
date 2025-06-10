import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function DesignBanner() {
  return (
    <div className="design-banner">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col lg="10">
            <h2 className="heading">
              <span className="text-highlight">Your dream home</span> is just a click away
            </h2>
            <p className="subtitle text-light">
              Book a free consultation with our expert interior designers.
            </p>
            <Button color="danger" className="cta-btn">
              START YOUR DESIGN JOURNEY
            </Button>
          </Col>
        </Row>
      </Container>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
}

export default DesignBanner;
