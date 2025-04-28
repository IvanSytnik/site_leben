import React from 'react';

const Modal = ({ onClose, translations }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена');
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>×</span>
        <h2>{translations.modalTitle}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={translations.namePlaceholder} required />
          <input type="email" placeholder={translations.emailPlaceholder} required />
          <input type="tel" placeholder={translations.phonePlaceholder} required />
          <input type="submit" value={translations.submit} className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Modal;