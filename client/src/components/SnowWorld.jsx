import React, { useState } from 'react';
import './SnowWorld.css';

function SnowWorld() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    offer_title: 'Snow World Pass',
    name: '',
    email: '',
    tickets: 1
  });
  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/snowworld-booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setConfirmation('✅ Booking Successful!');
        setFormData({ offer_title: 'Snow World Pass', name: '', email: '', tickets: 1 });
        setTimeout(() => {
          setShowForm(false);
          setConfirmation('');
        }, 2000);
      }
    } catch (err) {
      console.error('Error:', err);
      setConfirmation('❌ Something went wrong!');
    }
  };

  return (
    <>
      <div className="video-section">
        <video autoPlay muted loop className="snow-video">
          <source src="/images/snow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="SnowWorld-park-container">
        <div className="snowworld-content">
          <h1>❄️ WELCOME TO SNOW WORLD ❄️</h1>
          <p>Experience the Magic of Snow, Ice Slides, Snowball Fights & More !!!</p>
          <img src="/images/snow_img.jpg" alt="Snow Adventure" className="snow-image" />
          <div className="snowworld-info">
            <h3>What to Expect:</h3>
            <ul>
              <li>☃️ Real Snowfall Zones with Chilly Vibes</li>
              <li>🛷 Ice Sliding Ramps for All Ages</li>
              <li>🎯 Snowball Fight Arenas</li>
              <li>📸 Picture-perfect Winter Backdrops</li>
              <li>🍫 Hot Chocolate Corners to Warm You Up</li>
              <li>🧊 Frozen Maze Adventure <span style={{ color: 'red', fontWeight: 'bold' }}>(New!)</span></li>
              <li>🧤 Free Snow Jackets & Boots Available</li>
              <li>👨‍👩‍👧 Family Zones with Gentle Slides <span style={{ color: 'red', fontWeight: 'bold' }}>(New!)</span></li>
              <li>🚨 Safe & Supervised Zones for Kids</li>
              <li>🎥 Insta Reels Spot with Frost Effects <span style={{ color: 'red', fontWeight: 'bold' }}>(New!)</span></li>
              <li>💨 Snow Blower Show Every Hour</li>
            </ul>
            <p className="note">* Please Carry Warm Clothes or Rent Jackets at the Entry Gate.</p>
            <button className="book-now-btn" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="booking-form">
            <h2>Book Your Snow World Pass</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="number" name="tickets" placeholder="Number of Tickets" value={formData.tickets} min="1" onChange={handleChange} required />
              <button type="submit">Confirm Booking</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
            {confirmation && <p className="confirmation">{confirmation}</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default SnowWorld;
