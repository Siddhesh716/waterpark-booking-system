import React, { useEffect, useState } from 'react';
import './WaterPark.css';
import { Link } from 'react-router-dom';

function WaterPark() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [activeAddon, setActiveAddon] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/water-slides`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Slides fetched:", data);
        setSlides(data);
      })
      .catch((err) => console.error('Error fetching slides:', err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides]);

  const handleAddonClick = (addon) => {
    setActiveAddon(addon);
  };

  const closeOverlay = () => {
    setActiveAddon(null);
  };

  const addonContent = {
    Food: {
      image: "/images/f1.jfif",
      text: "🍕 Delicious Options you can't Resist!",
      details: [
        "Multi-Cuisine Food Courts",
        "Snacks, Beverages & Desserts",
        "Kid-Friendly Meals"
      ]
    },
    Travel: {
      image: "/images/t1.jpg",
      text: "🚌 Convenient Travel options Inside & around the Park!",
      details: [
        "Shuttle Services every 15 Minutes",
        "Eco-friendly Electric Carts",
        "Dedicated Parking Zones"
      ]
    },
    Clothes: {
      image: "/images/c1.jfif",
      text: "👕 Grab your Themed T-shirts & Accessories!",
      details: [
        "Exclusive Park Merchandise",
        "Cool SummerOutfits & Flip-Flops",
        "Souvenirs to Remember your Visit"
      ]
    }
  };
  return (
    <div className="water-park-container">
      <video
        className="waterpark-video"
        src="/images/water.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <h1>Welcome to the Water Park</h1>
      <div className="custom-carousel">
        {slides.length > 0 && (
          <div className="carousel-slide">
            <img src={slides[current].image_url} alt={slides[current].name} />
            <div className="caption">
              <strong>{slides[current].name}</strong> - {slides[current].description}
            </div>
          </div>
        )}
      </div>
      <div className="addon-section">
        <h2>Explore Essential Add-on</h2>
        <div className="addon-underline"></div>
        <div className="addon-items">
          <div className="addon-item" onClick={() => handleAddonClick("Food")}>
            <img src="/images/f.jfif" alt="Food" />
            <p>Food</p>
          </div>
          <div className="addon-item" onClick={() => handleAddonClick("Travel")}>
            <img src="/images/t.jpg" alt="Travel" />
            <p>Travel</p>
          </div>
          <div className="addon-item" onClick={() => handleAddonClick("Clothes")}>
            <img src="/images/c.jpg" alt="Merchandise" />
            <p>Clothes</p>
          </div>
        </div>
      </div>
      <div className="party-section">
        <h2>Party & Entertainment</h2>
        <div className="party-underline"></div>
        <div className="party-cards">
          <div className="party-card">
            <img src="/images/parade.jpg" alt="Parade" />
            <h3>Grand WaterPark Parade</h3>
            <p>Every Nook & Corner of Waterpark bursts with Entertainment Throughout the Day</p>
            <Link to="/parade" className="explore-btn">🎭 Explore</Link>
          </div>
          <div className="party-card">
            <img src="/images/wavepool.jpg" alt="Wave Pool Party" />
            <h3>Wave Pool Party</h3>
            <p>Every nook & Corner of Waterpark bursts with Entertainment Throughout the Day</p>
            <Link to="/wavepool" className="explore-btn">🎨 Explore</Link>
          </div>
          <div className="party-card">
            <img src="/images/raindance.jpg" alt="Rain Dance" />
            <h3>Rain Dance</h3>
            <p>Every Nook & Corner of Waterpark bursts with Entertainment Throughout the Day</p>
            <Link to="/raindance" className="explore-btn">🕺 Explore</Link>
          </div>
        </div>
      </div>
      {activeAddon && (
        <div
          className="overlay"
          onClick={(e) => {
            if (e.target.classList.contains('overlay')) {
              closeOverlay();
            }
          }}
        >
          <div className="overlay-content">
            <h3>{activeAddon}</h3>
            <img
              src={addonContent[activeAddon].image}
              alt={`${activeAddon} banner`}
              className="addon-overlay-img"
            />
            <p>{addonContent[activeAddon].text}</p>
            <ul>
              {addonContent[activeAddon].details.map((point, index) => (
                <li key={index}>🔸 {point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default WaterPark;