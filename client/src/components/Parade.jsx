import React from 'react';
import './Parade.css';

function Parade() {
    return (
        <div className="event-page-container">
            <h1 className="event-page-title">🎉 Grand WaterPark Parade</h1>
            <p className="event-page-description">
                From Morning till Evening, The Parade features Electrifying Performances, Dazzling Costumes & Non-stop Music that Captivates Visitors of All Ages. Whether you're Dancing along or soaking in the Atmosphere, It’s the kind of Magic that turns Moments into Memories.
            </p>
            <img
                src="/images/parade1.jfif"
                alt="Grand Parade"
                className="event-banner-img"
            />
            <ul className="event-list">
                <li>✨ Live Street performances with Dancers, Acrobats Stilt Walkers</li>
                <li>🎶 Non-stop music from live DJs & Drum Squads</li>
                <li>🧒 Interactive Mini-parade Sections for Kids to Join In</li>
                <li>🎭 Theme-based Sections — Carnival, Retro, Jungle & Marine</li>
                <li>🎤 Surprise Celebrity MCs & Crowd Games with Prizes</li>
            </ul>
            <p className="event-page-description">
                The Parade isn’t just a show — it’s a Celebration. One that Blends the Thrill of Waterpark Adventure with the Spirit of Festivity. Come Experience the Pulse of the Park & Let the Grand Parade Sweep You off your Feet.
            </p>
        </div>
    );
}

export default Parade;