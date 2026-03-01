import React from 'react';
import './FloatingButtons.css';

const FloatingButtons: React.FC = () => {
  const handleCallClick = () => {
    const phoneNumber = "7871594807";
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    const telLink = `tel:${formattedNumber}`;

    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = telLink;
    } else {
      // For desktop - show a modal or alert
      const alertBox = document.createElement('div');
      alertBox.style.position = 'fixed';
      alertBox.style.bottom = '120px';
      alertBox.style.right = '30px';
      alertBox.style.backgroundColor = 'white';
      alertBox.style.padding = '15px';
      alertBox.style.borderRadius = '8px';
      alertBox.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
      alertBox.style.zIndex = '1001';
      alertBox.style.maxWidth = '250px';

      const message = document.createElement('p');
      message.textContent = 'This would call our number on mobile.';
      message.style.marginBottom = '10px';

      const callLink = document.createElement('a');
      callLink.href = telLink;
      callLink.textContent = 'Click to call: ' + formattedNumber;
      callLink.style.color = '#3498db';
      callLink.style.textDecoration = 'none';
      callLink.style.fontWeight = 'bold';

      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Close';
      closeBtn.style.marginTop = '10px';
      closeBtn.style.padding = '5px 10px';
      closeBtn.style.backgroundColor = '#e74c3c';
      closeBtn.style.color = 'white';
      closeBtn.style.border = 'none';
      closeBtn.style.borderRadius = '4px';
      closeBtn.style.cursor = 'pointer';

      closeBtn.addEventListener('click', function () {
        document.body.removeChild(alertBox);
      });

      alertBox.appendChild(message);
      alertBox.appendChild(callLink);
      alertBox.appendChild(document.createElement('br'));
      alertBox.appendChild(closeBtn);

      document.body.appendChild(alertBox);

      // Auto-close after 5 seconds
      setTimeout(function () {
        if (document.body.contains(alertBox)) {
          document.body.removeChild(alertBox);
        }
      }, 5000);
    }
  };

  return (
    <div className="floating-buttons">
      <a href="https://wa.me/+916380539537" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-text">Contact Us</span>
      </a>
      <button className="call-btn" id="callButton" title="Call Us" onClick={handleCallClick}>
        <i className="fas fa-phone"></i>
        <span>Call Us</span>
      </button>
    </div>
  );
};

export default FloatingButtons;