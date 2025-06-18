import React, { useState } from 'react';
import axios from 'axios';

import {
  Container,
  Card,
  CardBody,
  Input,
  FormGroup,
  Label,
  Button,
  Row,
  Col,
  Alert,
} from 'reactstrap';

const QuoteForm = ({ onBack, finalPrice }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    whatsappUpdates: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const fullData = { ...formData }; // ✅ Only this form's data (not designFormData)
    console.log('Submitting:', fullData);

    try {
      setLoading(true);
      const response = await axios.post(
        // "http://localhost:8081/api/submit-quote",
        "https://sharmainteriorbackend1-production.up.railway.app/api/submit-quote",

        fullData
      );
      console.log('Server Response:', response.data);
      setSubmitted(true);
      setError('');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f8fa', minHeight: '100vh', paddingTop: '40px' }}>
      <Container>
        <Card
          style={{
            maxWidth: '700px',
            margin: 'auto',
            padding: '30px',
            borderRadius: '20px',
            border: 'none',
          }}
        >
          <CardBody>
            <h4 className="fw-bold text-center mb-4">Your estimate is almost ready</h4>

            {!submitted ? (
              <>
                <FormGroup className="mb-3">
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <Input
                    type="email"
                    placeholder="Email ID"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <Input
                    type="text"
                    placeholder="📞 Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup check className="mb-3">
                  <Label check>
                    <Input
                      type="checkbox"
                      name="whatsappUpdates"
                      checked={formData.whatsappUpdates}
                      onChange={handleChange}
                    />{' '}
                    <span style={{ color: '#f2545f', fontWeight: 'bold' }}>
                      Send me updates on WhatsApp
                    </span>
                  </Label>
                </FormGroup>

                <FormGroup className="mb-4">
                  <Input
                    type="text"
                    placeholder="Property Name"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                {error && <Alert color="danger">{error}</Alert>}

                <Row>
                  <Col xs="6">
                    <Button color="link" style={{ color: '#f2545f' }} onClick={onBack}>
                      BACK
                    </Button>
                  </Col>
                  <Col xs="6" className="text-end">
                    <Button
                      style={{
                        backgroundColor: '#f2545f',
                        border: 'none',
                        padding: '10px 30px',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                      }}
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'SUBMIT'}
                    </Button>
                  </Col>
                </Row>
              </>
            ) : (
              <div className="text-center">
                <h5 className="text-success mt-4 mb-2">
                  🎉 Thanks for contacting us, we will get back to you very soon!
                </h5>
                <h4 style={{ color: '#33c4ff' }}>
                  Your Estimated Price: ₹{finalPrice}
                </h4>
              </div>
            )}
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default QuoteForm;
