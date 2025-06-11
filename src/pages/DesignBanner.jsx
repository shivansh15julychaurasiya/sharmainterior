import {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import QuoteModal from './QuoteModel';

function DesignBanner() {

   const [showModal, setShowModal] = useState(false);
  
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
              <div className="App text-center p-2">
      <button
        className="btn btn-danger"
        onClick={() => setShowModal(true)}
      >
        START YOUR DESIGN JOURNEY
      </button>

      <QuoteModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
          </Col>
        </Row>
      </Container>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/9582544372"
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
