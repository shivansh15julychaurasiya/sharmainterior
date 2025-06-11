// src/components/QuoteForm.js
import React, { useState } from 'react';
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
} from 'reactstrap';

const QuoteForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    whatsappUpdates: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Quote submitted!');
    // Here you can send the formData to your backend
  };

  return (
    <div style={{ backgroundColor: '#f8f8fa', minHeight: '100vh', paddingTop: '40px' }}>
      <Container>
        <Card style={{ maxWidth: '700px', margin: 'auto', padding: '30px', borderRadius: '20px', border: 'none' }}>
          <CardBody>
            <h4 className="fw-bold text-center mb-4">Your estimate is almost ready</h4>

            <FormGroup className="mb-3">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Input
                type="email"
                placeholder="Email ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Input
                type="text"
                placeholder="📞 Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                <span style={{ color: '#f2545f', fontWeight: 'bold' }}>Send me updates on WhatsApp</span>
              </Label>
            </FormGroup>

            <FormGroup className="mb-4">
              <Input
                type="text"
                placeholder="Property Name"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
              />
            </FormGroup>

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
                >
                  SUBMIT
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default QuoteForm;
