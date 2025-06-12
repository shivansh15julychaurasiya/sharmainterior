import React, { useState } from 'react';
import {
  Container,
  Button,
  Card,
  CardBody,
  Label,
  FormGroup,
  Input,
  Alert,
} from 'reactstrap';

const WardrobeHeightSelector = ({ onNext, onBack }) => {
  const [selectedHeight, setSelectedHeight] = useState('7');

  const handleSelection = (value) => {
    setSelectedHeight(value);
  };

  const themeColor = '#3f51b5';

  return (
    <Container className="py-5 d-flex justify-content-center">
      <div style={{ width: '100%', maxWidth: '500px' }}>
        {/* Step Tracker */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong style={{ color: themeColor }}>1/4</strong>
            <div className="progress" style={{ height: '4px', width: '100%' }}>
              <div
                className="progress-bar"
                style={{ width: '25%', backgroundColor: themeColor }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="shadow-sm border-0">
          <CardBody>
            <h4 className="mb-3 text-center fw-bold" style={{ color: themeColor }}>
              What is the height of your wardrobe?
            </h4>

            <p className="text-center mb-2">
              Want to know more?{' '}
              <a href="#!" style={{ color: themeColor, textDecoration: 'underline' }}>
                Check here
              </a>
            </p>

            <Alert color="warning" className="text-center py-2 mb-4">
              Standard size has been set for your convenience
            </Alert>

            <FormGroup tag="fieldset" className="d-flex flex-column gap-3">
              {['4', '6', '7', '9'].map((height) => (
                <FormGroup
                  check
                  key={height}
                  className={`d-flex align-items-center p-2 border rounded ${
                    selectedHeight === height ? 'border-primary' : 'border-light'
                  }`}
                  style={{
                    borderColor: selectedHeight === height ? themeColor : '#ddd',
                    backgroundColor: selectedHeight === height ? '#f1f4ff' : '#fff',
                  }}
                >
                  <Input
                    type="radio"
                    name="height"
                    value={height}
                    checked={selectedHeight === height}
                    onChange={() => handleSelection(height)}
                  />
                  <Label check className="ms-2 fw-semibold">
                    {height} ft
                  </Label>
                </FormGroup>
              ))}
            </FormGroup>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-5">
              <Button color="link" className="text-muted fw-semibold" onClick={onBack}>
                BACK
              </Button>
              <Button
                style={{
                  backgroundColor: themeColor,
                  border: 'none',
                  padding: '10px 30px',
                  borderRadius: '25px',
                  color: '#fff',
                }}
                onClick={onNext}
              >
                NEXT
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default WardrobeHeightSelector;
