import { useEffect, useState } from 'react';
import './Offers.css';

function Offers() {
    const [offers, setOffers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tickets: 1,
        section_type: 'Water Park' // default
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/offers`)
            .then(res => res.json())
            .then(data => setOffers(data))
            .catch(err => console.error('Error fetching offers:', err));
    }, []);

    const handleBookNow = (offer) => {
        setSelectedOffer(offer);
        setShowForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    offer_title: selectedOffer.title
                })
            });
            if (response.ok) {
                setMessage('✅ Booking confirmed!');
                setFormData({ name: '', email: '', tickets: 1, section_type: 'Water Park' });
                setTimeout(() => {
                    setShowForm(false);
                    setMessage('');
                }, 2000);
            } else {
                setMessage('❌ Failed to book!');
            }
        } catch (err) {
            console.error(err);
            setMessage('❌ Server error.');
        }
    };

    return (
        <div>
            <div className="offers-video-wrapper">
                <video autoPlay muted loop className="offers-video">
                    <source src="/images/roller.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay-title">
                    <h2>🎢 Explore Our Exclusive Offers</h2>
                </div>
            </div>

            <div className="offers-container">
                <h2>🎟️ Current Offers & Passes</h2>
                <div className="offers-grid">
                    {offers.map((offer) => (
                        <div className="offer-card" key={offer.id}>
                            <h3>{offer.title}</h3>
                            <p>Price: ₹{offer.price}</p>
                            <button className="book-btn" onClick={() => handleBookNow(offer)}>Book Now</button>
                        </div>
                    ))}
                </div>
            </div>

            {showForm && (
                <div className="overlay-form">
                    <div className="form-box">
                        <h3>Booking for {selectedOffer?.title}</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                name="tickets"
                                placeholder="Number of Tickets"
                                value={formData.tickets}
                                onChange={handleChange}
                                required
                                min="1"
                            />
                            <select
                                name="section_type"
                                value={formData.section_type}
                                onChange={handleChange}
                                required
                            >
                                <option value="Water Park">Water Park</option>
                                <option value="Theme Park">Theme Park</option>
                            </select>

                            <button type="submit">Confirm Booking</button>
                            <p className="status">{message}</p>
                        </form>
                        <button className="close-btn" onClick={() => setShowForm(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Offers;
