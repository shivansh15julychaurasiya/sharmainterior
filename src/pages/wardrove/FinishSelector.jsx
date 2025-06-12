import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardImg,
  Label,
  FormGroup,
  Input
} from 'reactstrap';

const finishOptions = [
  {
    id: 'laminate',
    title: 'Standard - Laminate',
    image: '/images/finish1.png',
    price: '₹₹',
    tip: 'Looking for a seamless finish that sits well with every interior? This one\'s for you.',
  },
  {
    id: 'acrylic',
    title: 'Luxe-Glossy Acrylic',
    image: '/images/finish2.png',
    price: '₹₹₹',
    tip: 'Ideal for a sleek, modern look. Durable and easy to clean.',
  },
  {
    id: 'membrane',
    title: 'Premium-Membrane Finish',
    image: '/images/finish3.png',
    price: '₹₹',
    tip: 'Perfect for traditional or classic interiors. A great balance of aesthetics and cost.',
  },
];

const FinishSelector = ({ onNext, onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState('');

  const handleSelection = (value) => {
    setSelectedFinish(value);
  };

  const handleNext = () => {
    if (!selectedFinish) {
      alert('Please select a finish before proceeding.');
      return;
    }
    onNext(selectedFinish); // pass the selected finish to parent if needed
  };

  return (
    <Container className="py-4">
      <h4 className="text-center mb-4" style={{ color: '#2c3e50' }}>
        Select your preferred finish
      </h4>
      <Row className="justify-content-center">
        {finishOptions.map((option) => (
          <Col md="4" sm="6" className="mb-4" key={option.id}>
            <Card
              className={`shadow-sm p-3 rounded text-center h-100 ${
                selectedFinish === option.id ? 'border-info border-2' : ''
              }`}
              style={{ backgroundColor: '#f0f9ff', cursor: 'pointer' }}
              onClick={() => handleSelection(option.id)}
            >
              <CardBody>
                <FormGroup check className="mb-2">
                  <Label check>
                    <Input
                      type="radio"
                      name="finish"
                      value={option.id}
                      checked={selectedFinish === option.id}
                      onChange={() => handleSelection(option.id)}
                    />{' '}
                    <strong style={{ color: '#0077b6' }}>{option.title}</strong>
                  </Label>
                </FormGroup>
                <CardImg
                  top
                  width="100%"
                  src={option.image}
                  alt={option.title}
                  className="rounded mb-3"
                />
                <p><strong style={{ color: '#333' }}>Price</strong>: {option.price}</p>
                <p><strong style={{ color: '#333' }}>Pro Tip</strong>: {option.tip}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-between mt-4">
        <Button color="light" className="text-danger fw-bold px-4" onClick={onBack}>
          Back
        </Button>
        <Button color="info" className="px-5 text-white" onClick={handleNext}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default FinishSelector;
