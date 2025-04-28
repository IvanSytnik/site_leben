import React, { useEffect, useState } from 'react';
import slide2 from './photo/img2.avif';
import slide3 from './photo/img3.webp';
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [ slide2, slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} className="slide" src={slide} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;