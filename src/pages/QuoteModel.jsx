import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

function QuoteModal({ show, handleClose, downloadMode = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyName: "",
    whatsappUpdates: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullData = { ...formData };

    try {
      setLoading(true);
      const response = await axios.post(
        // "http://localhost:8081/api/submit-quote",
        "https://sharmainteriorbackend1-production.up.railway.app/api/submit-quote",
        
// 
        fullData
      );
      console.log(response)
      setSubmitted(true);
      setError("");

      if (downloadMode) {
        const link = document.createElement("a");
        link.href = "/files/InteriorGuide.pdf"; // Adjust this path to your actual public file
        link.download = "Sharma-Interior.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          Designs for Every Budget{" "}
          <span style={{ float: "right", fontSize: "14px", color: "#999" }}>
            1/2
          </span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="📞 Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Property Name or Location"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check
                type="checkbox"
                name="whatsappUpdates"
                checked={formData.whatsappUpdates}
                onChange={handleChange}
                className="me-2"
              />
              <Form.Label className="m-0">
                Send me updates on WhatsApp
              </Form.Label>
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}

            <Button
              type="submit"
              style={{
                backgroundColor: "#f55151",
                border: "none",
                width: "100%",
                borderRadius: "25px",
                padding: "10px 0",
                fontWeight: "bold",
              }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "GET FREE QUOTE"}
            </Button>

            <p
              className="text-center mt-3"
              style={{ fontSize: "12px", color: "#888" }}
            >
              By submitting this form, you agree to the{" "}
              <span style={{ color: "#f55151", cursor: "pointer" }}>
                privacy policy
              </span>{" "}
              &{" "}
              <span style={{ color: "#f55151", cursor: "pointer" }}>
                terms and conditions
              </span>
            </p>
          </Form>
        ) : (
          <div className="text-center">
            <h5 className="text-success mt-4 mb-2">
              🎉 Thanks for contacting us. We will get back to you very soon!
            </h5>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default QuoteModal;
