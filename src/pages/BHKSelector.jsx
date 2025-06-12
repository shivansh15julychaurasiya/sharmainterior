import React, { useState,useEffect } from 'react';
import {
  Container,
  Button,
  Card,
  CardBody,
  Label,
  Input,
  FormGroup,
} from 'reactstrap';

const bhkOptions = [
  { type: '1 BHK', sizes: [] },
  {
    type: '2 BHK',
    sizes: [
      { label: 'Small', description: 'Below 800 sq ft' },
      { label: 'Large', description: 'Above 800 sq ft' },
    ],
  },
  {
    type: '3 BHK',
    sizes: [
      { label: 'Small', description: 'Below 1200 sq ft' },
      { label: 'Large', description: 'Above 1200 sq ft' },
    ],
  },
  { type: '4 BHK', sizes: [] },
];

const BHKSelector = ({ onNext, onBack, onChange }) => {
  const [selectedBHK, setSelectedBHK] = useState('');
  const [expanded, setExpanded] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleBHKSelect = (type) => {
    setSelectedBHK(type);
    setExpanded(expanded === type ? '' : type);
    setSelectedSize('');
  };

  const handleSizeSelect = (label) => {
    setSelectedSize(label);
  };

  const handleNext = () => {
  if (onNext) onNext();
  if (onChange) {
    onChange({
      bhk: selectedBHK,
      size: selectedSize,
    });
  }
};


  useEffect(() => {
  console.log("BHK changed:", selectedBHK);
}, [selectedBHK]);

useEffect(() => {
  console.log("Size changed:", selectedSize);
}, [selectedSize]);


  return (
    <div style={{ backgroundColor: '#f8f8fa', minHeight: '100vh', paddingTop: '40px' }}>
      <Container>
        <Card style={{ maxWidth: '700px', margin: 'auto', padding: '30px', borderRadius: '20px', border: 'none' }} className='mt-5 mb-5'>
          <CardBody className="text-center">
            <h4 className="fw-bold mb-3">Select your BHK type</h4>
            <p>
              To know more about this,{' '}
              <a href="#" style={{ color: 'red' }}>
                click here
              </a>
            </p>

            {bhkOptions.map((bhk, index) => (
              <div key={index}>
                <Card
                  style={{
                    padding: '15px 20px',
                    border: selectedBHK === bhk.type ? '2px solid #f2545f' : '1px solid #ccc',
                    borderRadius: '12px',
                    marginBottom: '15px',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleBHKSelect(bhk.type)}
                >
                  <FormGroup check>
                    <Label check className="d-flex align-items-center gap-2 mb-0">
                      <Input
                        type="radio"
                        name="bhk"
                        value={bhk.type}
                        checked={selectedBHK === bhk.type}
                        onChange={() => handleBHKSelect(bhk.type)}
                      />
                      {bhk.type}
                    </Label>
                  </FormGroup>

                  {/* Size Options */}
                  {expanded === bhk.type && bhk.sizes.length > 0 && (
                    <div className="mt-3 d-flex justify-content-around flex-wrap">
                      {bhk.sizes.map((size, idx) => (
                        <Label
                          key={idx}
                          style={{
                            padding: '10px 20px',
                            border: selectedSize === size.label ? '2px solid #f2545f' : '1px solid #ddd',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            backgroundColor: selectedSize === size.label ? '#fff0f0' : '#fff',
                            width: '45%',
                            textAlign: 'left',
                            marginBottom: '10px',
                          }}
                          onClick={() => handleSizeSelect(size.label)}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <Input
                              type="radio"
                              name={`size-${bhk.type}`}
                              value={size.label}
                              checked={selectedSize === size.label}
                              onChange={() => handleSizeSelect(size.label)}
                            />
                            <div>
                              <strong>{size.label}</strong>
                              <div style={{ fontSize: '12px', color: '#888' }}>
                                {size.description}
                              </div>
                            </div>
                          </div>
                        </Label>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </CardBody>
        </Card>

        {/* Navigation Buttons */}
        <div
          style={{
            maxWidth: '700px',
            margin: '20px auto 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button color="link" style={{ color: '#f8bfbf' }} onClick={onBack}>
            BACK
          </Button>
          <Button
            onClick={handleNext}
            style={{
              backgroundColor: '#f2545f',
              border: 'none',
              padding: '10px 30px',
              borderRadius: '25px',
              fontWeight: 'bold',
            }}
          >
            NEXT
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default BHKSelector;
