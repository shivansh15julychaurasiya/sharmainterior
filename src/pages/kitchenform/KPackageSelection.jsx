import React, { useState } from 'react';

const packages = [
  {
    id: 'essentials',
    name: 'Essentials (₹)',
    title: 'Smart & Stylish Kitchen Solutions',
    description: "Perfect for budget-conscious homeowners, our Essentials package offers compact, efficient, and beautiful kitchens designed for everyday convenience.",
    image: '/images/kitchen2.png',
    features: ['Affordable pricing', 'Convenient designs', 'Quick installation'],
  },
  {
    id: 'premium',
    name: 'Premium (₹₹)',
    title: 'Seamless Style Meets Functionality',
    description: "The Premium package blends modern aesthetics with functionality—featuring high-quality materials, smart storage, and sleek finishes for a contemporary kitchen experience.",
    image: '/images/kitchen1.png',
    features: ['Premium materials', 'Customizable options', 'Stylish aesthetics'],
  },
  {
    id: 'luxe',
    name: 'Luxe (₹₹₹)',
    title: 'Luxury Kitchens, Redefined',
    description: "Experience ultimate sophistication with the Luxe package—crafted with high-end finishes, exclusive designs, and top-tier craftsmanship for the finest kitchen interiors.",
    image: '/images/kitchen4.png',
    features: ['Luxury finishes', 'Exclusive designs', 'Premium service'],
  },
];


const PackageSelection = ({ onNext, onBack }) => {
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleSelection = (pkgId) => {
    setSelectedPackage(pkgId);
  };

  const handleNext = () => {
    onNext({ selectedPackage }); //  removed alert validation
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
        <button style={styles.backButton} onClick={onBack}>
          BACK
        </button>
        <button style={styles.nextButton} onClick={handleNext}>
          NEXT
        </button>
      </div>
    </div>
  );
};

//  Inline Styles
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
    color: 'blue',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default PackageSelection;
