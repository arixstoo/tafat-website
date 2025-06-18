import React from 'react';
import '../styles/FloatingButton.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/213777376082"
        className="floating-button whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Contacter via WhatsApp"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FloatingButtons;
