import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => {
        console.log('👉 From backend:', data);
        setBackendMessage(data);
      })
      .catch((err) => console.error('Error connecting to backend:', err));
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{backendMessage}</h1>
      </div>
    </div>
  );
}
export default Hero;