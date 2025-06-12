import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const materialOptions = [
  {
    id: 'mdf',
    title: 'MDF',
    subtitle: 'Smooth, durable and easy to paint.',
    image: '/images/material1.png', // Replace with your actual image
    price: '₹₹',
    tip: 'Great for interiors where paint finish is required.',
  },
  {
    id: 'hdf',
    title: 'HDF/HMR',
    subtitle: 'High density and water-resistant core.',
    image: '/images/material2.png',
    price: '₹₹₹',
    tip: 'Best suited for kitchen and bathroom cabinets.',
  },
];

const MaterialSelector = ({ onNext, onBack }) => {
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const handleSelection = (id) => {
    setSelectedMaterial(id);
  };

  const handleNext = () => {
    if (!selectedMaterial) {
      alert('Please select a material before proceeding.');
      return;
    }
    onNext(selectedMaterial); // Optionally pass the selected material
  };

  return (
    <Container className="py-4">
      <h4 className="text-center mb-4" style={{ color: '#1e3a8a' }}>
        Select your preferred material
      </h4>
      <Row className="justify-content-center">
        {materialOptions.map((material) => (
          <Col md="6" key={material.id}>
            <Card
              className={`shadow-sm p-3 mb-4 rounded ${
                selectedMaterial === material.id ? 'border-primary border-2 bg-light' : ''
              }`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleSelection(material.id)}
            >
              <CardBody>
                <FormGroup check className="mb-2">
                  <Label check>
                    <Input
                      type="radio"
                      name="material"
                      value={material.id}
                      checked={selectedMaterial === material.id}
                      onChange={() => handleSelection(material.id)}
                    />{' '}
                    <strong style={{ color: '#0d47a1' }}>{material.title}</strong>
                    <div style={{ fontSize: '0.85rem', color: '#555' }}>
                      {material.subtitle}
                    </div>
                  </Label>
                </FormGroup>
                <CardImg
                  top
                  width="100%"
                  src={material.image}
                  alt={material.title}
                  className="rounded mb-3"
                />
                <p><strong>Price</strong>: {material.price}</p>
                <p><strong>Pro Tip</strong>: {material.tip}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-between">
        <Button color="secondary" className="fw-bold px-4" onClick={onBack}>
          Back
        </Button>
        <Button color="primary" className="px-5 text-white" onClick={handleNext}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default MaterialSelector;
