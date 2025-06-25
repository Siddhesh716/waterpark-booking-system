import React from 'react';
import './RainDance.css';

function RainDance() {
    return (
        <div className="event-page-container">
            <h1 className="event-page-title">💃 Rain Dance</h1>
            <p className="event-page-description">
                Welcome to the Ultimate Monsoon Vibe, Minus the Weather Forecast. Our Rain Dance Zone is where the Music never Stops & the Rain never runs Dry.
                With Synchronized Showers, Neon Lighting & Foot-thumping Beats, you’ll feel like you’re in a Club  under the Clouds. Whether you're with Friends or Dancing Solo, it’s the Perfect Splash of Joy.
            </p>
            <img
                src="/images/raindance1.jfif"
                alt="Rain Dance"
                className="event-banner-img"
            />
            <ul className="event-list">
                <li>🌧️ Artificial Rain Showers with 360° Coverage</li>
                <li>🎶 Live Dance Tracks & Rain-themed Playlists</li>
                <li>🕺 LED Floor Tiles & UV-reactive Water Effects</li>
                <li>💡 Night Lighting turns the Area into a Splash Rave</li>
                <li>👚 Waterproof changing Zones nearby for Ease</li>
            </ul>
            <p className="event-page-description">
                Come Shake off the Heat, feel the Rhythm & Dance like no one’s Watching  all Under the Open Skies of our Electrifying Rain Dance Zone.
            </p>
        </div>
    );
}

export default RainDance;
