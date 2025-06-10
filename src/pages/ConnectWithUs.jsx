import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ConnectWithUs = () => {
  return (
    <div className="connect-section">
      <h2 className="connect-title">Connect with us</h2>
      <p className="connect-description">
        Reach out on WhatsApp or give us a call for the best home design experience.
      </p>
      <div className="connect-buttons">
        <a href="tel:+1234567890" className="connect-button call-button">
          <FaPhoneAlt />
          <span>CALL NOW</span>
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-button whatsapp-button"
        >
          <FaWhatsapp />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};

export default ConnectWithUs;
