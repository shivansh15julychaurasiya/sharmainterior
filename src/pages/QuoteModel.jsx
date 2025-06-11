// QuoteModal.js
import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";

function QuoteModal({ show, handleClose }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [whatsApp, setWhatsApp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, whatsApp });
    handleClose(); // Close after submit
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          Designs for Every Budget <span style={{ float: 'right', fontSize: "14px", color: "#999" }}>1/2</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: "100%" }}
              inputProps={{
                required: true,
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Check
              type="checkbox"
              checked={whatsApp}
              onChange={() => setWhatsApp(!whatsApp)}
              className="me-2"
            />
            <Form.Label className="m-0">Send me updates on WhatsApp</Form.Label>
          </Form.Group>

          <Button
            type="submit"
            style={{
              backgroundColor: "#f55151",
              border: "none",
              width: "100%",
              borderRadius: "25px",
              padding: "10px 0",
              fontWeight: "bold"
            }}
          >
            GET FREE QUOTE
          </Button>

          <p className="text-center mt-3" style={{ fontSize: "12px", color: "#888" }}>
            By submitting this form, you agree to the{" "}
            <span style={{ color: "#f55151", cursor: "pointer" }}>privacy policy</span> &{" "}
            <span style={{ color: "#f55151", cursor: "pointer" }}>terms and conditions</span>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default QuoteModal;
