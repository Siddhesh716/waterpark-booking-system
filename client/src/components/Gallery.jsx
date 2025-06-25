import React, { useState, useEffect } from 'react';
import './Gallery.css';

const slides = [
  {
    image: '/images/g1.jpg',
    title: 'Aqua Loop',
    desc: '360° Water Thrill that’ll Turn your World Upside Down!',
  },
  {
    image: '/images/g2.jpg',
    title: 'Nitro Coaster',
    desc: 'India’s Longest Roller Coaster – Fast, Furious, Fun!',
  },
  {
    image: '/images/g3.jpg',
    title: 'The Grand Parade',
    desc: 'Spectacle of Colors, Music & Carnival Vibes every Evening!',
  },
];

function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;