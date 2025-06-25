import React, { useEffect, useState } from 'react';
import './ThemePark.css';

function ThemePark() {
  const [rides, setRides] = useState([]);
  const [reviews, setReviews] = useState({});
  const [formData, setFormData] = useState({ ride_id: '', name: '', comment: '' });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/rides`)
      .then(res => res.json())
      .then(data => {
        setRides(data);
        data.forEach(ride => loadReviews(ride.id));
      })
      .catch(err => console.error('Error fetching rides:', err));
  }, []);

  const loadReviews = (ride_id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/reviews/${ride_id}`)
      .then(res => res.json())
      .then(data => {
        setReviews(prev => ({ ...prev, [ride_id]: data }));
      })
      .catch(err => console.error('Error fetching reviews:', err));
  };

  const handleInput = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ride_id, name, comment } = formData;
    if (!ride_id || !name || !comment) return;
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        loadReviews(ride_id);
        setFormData({ ride_id: '', name: '', comment: '' });
      }
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  return (
    <div className="theme-park-container">
      <h1>🎡 Welcome to the Theme Park</h1>
      <div className="ride-grid">
        {rides.map((ride) => (
          <div key={ride.id} className={`ride-card ${ride.status ? 'open' : 'closed'}`}>
            <h2>{ride.name}</h2>
            <p>{ride.description}</p>
            <p className="ride-status">Status: {ride.status ? '✅ Open' : '❌ Closed'}</p>
            <div className="reviews">
              <h4>Reviews:</h4>
              <ul>
                {(reviews[ride.id] || []).slice(0, 3).map((r, i) => (
                  <li key={i}><strong>{r.name}</strong>: {r.comment}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="theme-info-section">
        <h2>Our Theme Park has 'Something for Everyone!'</h2>
        <div className="info-boxes">
          <div className="info-card">
            <h3>🎯 Features India’s Many Firsts Experiences</h3>
            <ul>
              <li>🎢 Adrenaline Pumping Outdoor <span className="link-text">Roller Coaster Thrill Rides</span> like Nitro, Deep Space</li>
              <li>🎭 Thematic <span className="link-text">Indoor AC shows & Attractions</span> like Wrath of the Gods, I for India</li>
              <li>👨‍👩‍👧 Shared Fun with <span className="link-text">Family Rides</span> like Mr India, Rajasaurus</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>🎉 Beyond the Rides, Enjoy</h3>
            <ul>
              <li>🍴 Multi-cuisine Themed <span className="link-text">Dining</span> that Caters to every Palate</li>
              <li>🎈 <span className="link-text">Tubby’s Secret Party</span> with Food & Entertainment for Kids</li>
              <li>🎶 Immersive <span className="link-text">Grand Waterpark Parade</span> where Music Meets Dance</li>
              <li>💃 <span className="link-text">Daily Special</span> Dance Acts by talented Acrobats, Dancers</li>
            </ul>
          </div>
        </div>
        <div className="feature-icons">
          <div className="feature-item">🌳<p>Lush Green Environment</p></div>
          <div className="feature-item">💧<p>Cool Mist in Queues</p></div>
          <div className="feature-item">🏖️<p>Shaded Promenade Area</p></div>
        </div>
      </div>
      <div className="review-form-section">
        <h2>Share Your Rides Experience</h2>
        <form onSubmit={handleSubmit}>
          <select name="ride_id" value={formData.ride_id} onChange={handleInput}>
            <option value="">Select Ride</option>
            {rides.map(ride => (
              <option key={ride.id} value={ride.id}>{ride.name}</option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInput}
          />
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleInput}
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default ThemePark;