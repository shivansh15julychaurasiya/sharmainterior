import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';

const measurementOptions = Array.from({ length: 31 }, (_, i) => i + 5); // [5 - 35 ft]

const KitchenMeasurementForm = ({ onNext, onBack }) => {
  const [measurements, setMeasurements] = useState({
    A: '10',
    B: '11',
    C: '10',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // You can send data to parent or context here
    onNext();
  };

  return (
    <Container className="mt-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h4 className="fw-bold">Now review the measurements for accuracy</h4>
      </div>

      {/* Image */}
      <div className="d-flex justify-content-center mb-3">
        <img
          src="/images/kabcu.png"
          alt="Measurement Layout"
          style={{ maxWidth: '300px' }}
        />
      </div>

      {/* Info Box */}
      <div className="text-center mb-4">
        <Alert color="warning" className="py-2 mb-2">
          Standard size has been set for your convenience
        </Alert>
      </div>

      {/* Form */}
      <Form className="mx-auto" style={{ maxWidth: '400px' }}>
        {['A', 'B', 'C'].map((label) => (
          <FormGroup key={label}>
            <Label for={label}>{label}</Label>
            <div className="d-flex align-items-center">
              <Input
                type="select"
                name={label}
                id={label}
                value={measurements[label]}
                onChange={handleChange}
              >
                {measurementOptions.map((ft) => (
                  <option key={ft} value={ft}>
                    {ft}
                  </option>
                ))}
              </Input>
              <span className="ms-2">ft.</span>
            </div>
          </FormGroup>
        ))}
      </Form>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4" style={{ maxWidth: '400px', margin: 'auto' }}>
        <Button color="light" onClick={onBack}>Back</Button>
        <Button color="danger" onClick={handleSubmit}>Next</Button>
      </div>
    </Container>
  );
};

export default KitchenMeasurementForm;
