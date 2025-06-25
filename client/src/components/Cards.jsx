import React from 'react';
import './Cards.css';

function Cards() {
    return (
        <div className="card-section">
            <h2>Latest Offers & Promotion</h2>
            <div className="card-grid">
                <div className="card">
                    <img src="/images/main1.jpg" alt="Urban Planning" />
                    <h3>VIP Package</h3>
                    <p>Exclusive Access, Premium benefits — For those who Plan Big & Dream Bigger</p>
                </div>
                <div className="card">
                    <img src="/images/main2.jpg" alt="Architecture" />
                    <h3>Happy Thursday</h3>
                    <p>Celebrate Midweek Vibes with Surprise Perks & Cheerful Moments just for you</p>
                </div>
                <div className="card">
                    <img src="/images/main3.jpg" alt="Construction" />
                    <h3>Free Express Pass</h3>
                    <p>Skip the Lines & Fast-Track your Journey with Ease & Efficiency</p>
                </div>
                <div className="card">
                    <img src="/images/main4.jpg" alt="Construction" />
                    <h3>Books Add-To</h3>
                    <p>Expand your Library — Add New Titles to your Collection with Every Click</p>
                </div>
                <div className="card">
                    <img src="/images/main5.jpg" alt="Construction" />
                    <h3>Student Pass</h3>
                    <p>Learn, Explore & Grow — Special Privileges Tailored for Curious Minds</p>
                </div>
                <div className="card">
                    <img src="/images/main6.jpg" alt="Construction" />
                    <h3>Save 30%</h3>
                    <p>Smart Deals for Smarter Choices — Grab your Discount & Upgrade Today</p>
                </div>
            </div>

        </div>
    );
}

export default Cards;