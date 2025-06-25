import React, { useState } from 'react';
import './Contact.css';
import ParkMap from './ParkMap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="Contact-park-wrapper">
      <ParkMap />
      <div className="Contact-park-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>📬 Get in Touch</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
          <p className="status-text">{status}</p>
        </form>
        <div className="contact-quote">
          <h1>“Life is Better When you’re Wet & Wild”</h1>
          <p>Dive into Unforgettable Memories - We’re just a Splash Away from your Next Big Adventure!</p>
          <p>From Thrilling Slides to Peaceful Pools - We Create Joy & One Wave at a Time</p>
        </div>
      </div>
    </div>
  );

}
export default Contact;