import React, { useState } from 'react';
import BHKSelector from './BHKSelector';
import RoomSelection from './RoomSelection';
import PackageSelection from './PackageSelection';
import QuoteForm from './QuoteForm';
import KitchenLayoutSelector from './kitchenform/KitchenLayoutSelector ';
import KitchenMeasurementForm from './kitchenform/KitchenMeasurementForm';
import KPackageSelection from './kitchenform/KPackageSelection';
import WardrobeHeightSelector from './wardrove/WardrobeHeightSelector ';
import WardrobeTypeSelector from './wardrove/WardrobeTypeSelector ';
import FinishSelector from './wardrove/FinishSelector';
import MaterialSelector from './wardrove/MaterialSelector';

const MultiStepForm = ({ type }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps =
    type === 'kitchen'
      ? ['KITCHEN LAYOUT', 'MEASUREMENTS', 'PACKAGE', 'GET QUOTE']
      : type === 'wardrobe'
        ? ['WARDROBE STYLE', 'DIMENSIONS', 'PACKAGE', 'GET QUOTE']
        : ['BHK TYPE', 'ROOMS TO DESIGN', 'PACKAGE', 'GET QUOTE'];

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

  const handleFormDataChange = (stepKey, value) => {
    setFormData((prev) => ({ ...prev, [stepKey]: value }));
  };

  const calculatePrice = () => {
    let total = 0;

    const bhk = formData.bhkDetails?.bhk;
    const size = formData.bhkDetails?.size;
    const rooms = formData.rooms || [];
    const pkg = formData.package;

    // Base price
    if (bhk === '1 BHK') total += 20000;
    else if (bhk === '2 BHK' && size === 'Small') total += 40000;
    else if (bhk === '2 BHK' && size === 'Large') total += 60000;
    else if (bhk === '3 BHK' && size === 'Small') total += 90000;
    else if (bhk === '3 BHK' && size === 'Large') total += 110000;

    // Room pricing
    const roomPricing = {
      'Living Room': 10000,
      'Kitchen': 8000,
      'Bedroom': 7000,
      'Bathroom': 5000,
      'Dining': 6000,
    };

    rooms.forEach((room) => {
      const pricePerRoom = roomPricing[room.name] || 0;
      const count = room.count ?? 1;
      total += pricePerRoom * count;
    });

    // Package price
    if (pkg === 'essentials') total += 15000;
    else if (pkg === 'premium') total += 30000;
    else if (pkg === 'luxe') total += 50000;

    console.log("Calculation Breakdown:", {
      bhk,
      size,
      rooms,
      pkg,
      total
    });

    return total;
  };

  const renderStepComponent = () => {
    const finalPrice = calculatePrice();

    if (type === 'kitchen') {
      switch (currentStep) {
        case 0:
          return <KitchenLayoutSelector onNext={nextStep} />;
        case 1:
          return <KitchenMeasurementForm onNext={nextStep} onBack={prevStep} />;
        case 2:
          return <KPackageSelection onNext={nextStep} onBack={prevStep} />;
        case 3:
          return <QuoteForm onBack={prevStep} finalPrice={finalPrice} formData={formData} />;
        default:
          return null;
      }
    } else if (type === 'wardrobe') {
      switch (currentStep) {
        case 0:
          return <WardrobeHeightSelector onNext={nextStep} />;
        case 1:
          return <WardrobeTypeSelector onNext={nextStep} onBack={prevStep} />;
        case 2:
          return <FinishSelector onNext={nextStep} onBack={prevStep} />;
        case 3:
          return <MaterialSelector onBack={prevStep} />;
        default:
          return null;
      }
    } else {
      switch (currentStep) {
        case 0:
          return (
            <BHKSelector
              onNext={nextStep}
              onBack={prevStep}
              onChange={(data) => handleFormDataChange('bhkDetails', data)}
            />
          );
        case 1:
          return (
            <RoomSelection
              onNext={nextStep}
              onBack={prevStep}
              onChange={(value) => handleFormDataChange('rooms', value)}
              selected={formData.rooms}
              type={type}
            />
          );
        case 2:
          return (
            <PackageSelection
              onNext={nextStep}
              onBack={prevStep}
              onChange={(value) => handleFormDataChange('package', value)}
              selected={formData.package}
            />
          );
        case 3:
          return (
            <QuoteForm
              onBack={prevStep}
              finalPrice={finalPrice}
              formData={formData}
            />
          );
        default:
          return null;
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '60vh', padding: '30px 0' }}>
      <div style={{ maxWidth: '700px', margin: 'auto', paddingBottom: '10px' }}>
        <h4 className="text-center text-uppercase mb-4" style={{ color: '#f2545f' }}>
          Estimating for: {type?.replace('-', ' ') || 'Home'}
        </h4>

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

        <div style={{ textAlign: 'right', fontWeight: 'bold', color: 'blue' }}>
          {currentStep + 1}/{steps.length}
        </div>
      </div>

      {renderStepComponent()}
    </div>
  );
};

export default MultiStepForm;
