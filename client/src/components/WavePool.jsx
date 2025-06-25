import React from 'react';
import './WavePool.css';

function WavePool() {
    return (
        <div className="event-page-container">
            <h1 className="event-page-title">🌊 Wave Pool Party</h1>
            <p className="event-page-description">Dive into a Sea of Excitement! The Wave Pool Party is the Heartbeat of our Water Park where the Waves never Stop & the Music keeps Flowing.
                Step into the Pulse of the Park — the Legendary Wave Pool Party. It’s not just a Splash Zone, it’s an Energy Hub where Water meets Beats & Fun Hits Tidal Levels.
            </p>
            <img
                src="/images/wavepool1.jpg"
                alt="Wave Pool Party"
                className="event-banner-img"
            />
            <ul className="event-list">
                <li>🎧 Live DJ sets with EDM, Bollywood & Retro Hits</li>
                <li>🌴 Pool floaties, loungers & cabanas for relaxation</li>
                <li>🌞 Sun-safe zones with lifeguards at all points</li>
                <li>🥤 On-pool refreshments & mocktail counters</li>
                <li>👨‍👩‍👧‍👦 Family-friendly and safe for all age groups</li>
            </ul>
            <p className="event-page-description">Whether you're Dancing in the Waves or Chilling Poolside with a Drink in Hand, the Wave Pool Party is your Escape into a Tropical Dream right inside the Water Park.
            </p>
        </div>
    );
}

export default WavePool;
