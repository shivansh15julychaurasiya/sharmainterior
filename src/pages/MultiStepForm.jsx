import React, { useState } from 'react';
import BHKSelector from './BHKSelector';
import PackageSelection from './PackageSelection'; //  import step 2
import QuoteForm from './QuoteForm'; // final step
import RoomSelection from './RoomSelection';

const steps = ['BHK TYPE', 'ROOMS TO DESIGN', 'PACKAGE', 'GET QUOTE'];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <BHKSelector onNext={nextStep} />;
      case 1:
        return <RoomSelection onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <PackageSelection onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <QuoteForm onBack={prevStep} />;
      default:
        return <div className="text-center mt-5">Step not implemented yet</div>;
    }
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '60vh', padding: '30px 0' }} className='mt-4'>
      {/* Step Indicator */}
      <div style={{ maxWidth: '700px', margin: 'auto', paddingBottom: '10px' }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          {steps.map((label, index) => (
            <div key={index} style={{ textAlign: 'center', flex: 1 }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  margin: 'auto',
                  borderRadius: '50%',
                  backgroundColor: index <= currentStep ? '#f2545f' : '#ddd',
                }}
              ></div>
              <div
                style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  color: index === currentStep ? '#f2545f' : '#999',
                  fontWeight: index === currentStep ? 'bold' : 'normal',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Step Progress Bar */}
        <div style={{ textAlign: 'right', fontWeight: 'bold', color: 'blue' }}>
          {currentStep + 1}/{steps.length}
        </div>
      </div>

      {/* Step Form */}
      {renderStepComponent()}
    </div>
  );
};

export default MultiStepForm;
