// components/FloatingButtons.tsx
import React from 'react';

const FloatingButtons: React.FC = () => {
  const handleCallButton = () => {
    const rawNumber = "7871594807";
    const formattedNumber = rawNumber.replace(/\D/g, '');
    const telLink = `tel:${formattedNumber}`;

    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = telLink;
    } else {
      alert(`This would call our number on mobile. Call us at: ${formattedNumber}`);
    }
  };

  return (
    <div className="floating-buttons">
      <a href="https://wa.me/+916380539537" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-text">Contact Us</span>
      </a>
      <button className="call-btn" onClick={handleCallButton} title="Call Us">
        <i className="fas fa-phone"></i>
        <span>Call Us</span>
      </button>
    </div>
  );
};

export default FloatingButtons;