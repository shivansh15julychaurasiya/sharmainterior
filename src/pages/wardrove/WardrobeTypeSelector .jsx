import React, { useState } from 'react';
import {
  Container,
  Card,
  CardBody,
  Button,
  Label,
  FormGroup,
  Input
} from 'reactstrap';

const WardrobeTypeSelector = ({ onNext, onBack }) => {
  const [selectedType, setSelectedType] = useState('Sliding');
  const themeColor = '#3f51b5';

  const wardrobeTypes = [
    {
      type: 'Sliding',
      description: 'Movable doors that slide horizontally...',
      image: '/images/sliding.png',
      note: 'Make a style statement...',
    },
    {
      type: 'Hinged',
      description: 'Classic door style with hinges...',
      image: '/images/hinged.png',
      note: 'Great for traditional layouts...',
    },
  ];

  const handleNext = () => {
    console.log("Next clicked on WardrobeTypeSelector");
    onNext(); //  Important for moving forward
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong style={{ color: themeColor }}>2/4</strong>
            <div className="progress" style={{ height: '4px', width: '100%' }}>
              <div
                className="progress-bar"
                style={{ width: '50%', backgroundColor: themeColor }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="shadow-sm border-0">
          <CardBody>
            <h4 className="mb-4 text-center fw-bold" style={{ color: themeColor }}>
              Select the type of wardrobe
            </h4>

            <FormGroup className="d-flex flex-column gap-4">
              {wardrobeTypes.map(({ type, description, image, note }) => (
                <div
                  key={type}
                  className="p-3 border rounded"
                  style={{
                    borderColor: selectedType === type ? themeColor : '#ddd',
                    backgroundColor: selectedType === type ? '#f1f4ff' : '#fff',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedType(type)}
                >
                  <FormGroup check className="mb-2">
                    <Input
                      type="radio"
                      name="wardrobeType"
                      value={type}
                      checked={selectedType === type}
                      onChange={() => setSelectedType(type)}
                    />
                    <Label check className="ms-2 fw-semibold">{type}</Label>
                  </FormGroup>

                  <p className="text-muted mb-2">{description}</p>
                  <img
                    src={image}
                    alt={type}
                    className="img-fluid rounded mb-2"
                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                  />
                  <small className="text-muted">{note}</small>
                </div>
              ))}
            </FormGroup>

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
                onClick={handleNext}
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

export default WardrobeTypeSelector;
