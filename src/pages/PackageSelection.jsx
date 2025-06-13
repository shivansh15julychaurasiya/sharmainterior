import React, { useState, useEffect } from 'react';

const packages = [
  {
    id: 'essentials',
    name: 'Essentials (₹)',
    description: "A range of essential home interior solutions that's perfect for all your needs.",
    image: '/images/essential.png',
    features: ['Affordable pricing', 'Convenient designs'],
  },
  {
    id: 'premium',
    name: 'Premium (₹₹)',
    description: "A balanced mix of style and functionality with premium quality materials and finishes.",
    image: '/images/premium.jpg',
    features: ['Premium materials', 'Customizable options', 'Stylish aesthetics'],
  },
  {
    id: 'luxe',
    name: 'Luxe (₹₹₹)',
    description: "Top-of-the-line home interior solutions with luxury furnishings and finishes.",
    image: '/images/luxe.png',
    features: ['Luxury finishes', 'Exclusive designs', 'Premium service'],
  },
];

const PackageSelection = ({ onNext, onBack, onChange, selected = '' }) => {
  const [selectedPackage, setSelectedPackage] = useState(selected);

  useEffect(() => {
    console.log("Selected Package:", selectedPackage);
  }, [selectedPackage]);

  const handleSelection = (pkgId) => {
    setSelectedPackage(pkgId);
  };

  const handleNext = () => {
    onChange(selectedPackage); // ✅ send package to parent
    onNext();                  // ✅ move to next step
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Pick your package</h2>

      {packages.map((pkg) => (
        <div
          key={pkg.id}
          style={{
            ...styles.card,
            border: selectedPackage === pkg.id ? '2px solid #fc5c65' : '1px solid #ddd',
          }}
        >
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="package"
              value={pkg.id}
              checked={selectedPackage === pkg.id}
              onChange={() => handleSelection(pkg.id)}
            />
            <strong style={{ marginLeft: 8 }}>{pkg.name}</strong>
          </label>

          <p style={styles.description}>{pkg.description}</p>

          <img src={pkg.image} alt={pkg.name} style={styles.image} />

          <ul style={styles.featureList}>
            {pkg.features.map((feature, index) => (
              <li key={index} style={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div style={styles.navButtons}>
        <button style={styles.backButton} onClick={onBack}>BACK</button>
        <button style={styles.nextButton} onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: '2rem',
    background: '#fff',
    borderRadius: '12px',
    maxWidth: '700px',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
  },
  card: {
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '1.5rem',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
  },
  description: {
    color: '#555',
    fontSize: '14px',
    marginTop: '0.5rem',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    marginTop: '1rem',
    borderRadius: '8px',
  },
  featureList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '1rem',
    fontSize: '14px',
  },
  featureItem: {
    marginBottom: '0.5rem',
    color: '#333',
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#f8d7da',
    border: 'none',
    color: '#d9534f',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  nextButton: {
    padding: '10px 24px',
    backgroundColor: '#fc5c65',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default PackageSelection;
