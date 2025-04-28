import React from 'react';

const Section = ({ id, title, text, img, onRegister, registerText }) => {
  return (
    <div id={id} className="section">
      <img src={img} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn" onClick={onRegister}>{registerText}</button>
      </div>
    </div>
  );
};

export default Section;