import React from 'react';
import './TicketCards.css';
import { useNavigate } from 'react-router-dom';

const ticketData = [
    {
        type: 'Gold Pass',
        price: '₹2999',
        features: ['Unlimited Rides', 'Priority Entry', 'Free Snacks'],
        color: 'red',
    },
    {
        type: 'Silver Pass',
        price: '₹1999',
        features: ['Access to all Zones', 'Regular Entry', 'Free Drink'],
        color: 'blue',
    },
    {
        type: 'Bronze Pass',
        price: '₹999',
        features: ['4 Tickets', 'Meal Coupons', 'Locker Facility'],
        color: 'green',
    },
];

function TicketCards() {
    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate('/tickets');
    };
    return (
        <div className="ticket-section">
            <h2>Choose Your Adventure</h2>
            <div className="ticket-cards">
                {ticketData.map((ticket, index) => (
                    <div className="ticket-card" key={index} style={{ borderColor: ticket.color }}>
                        <h3>{ticket.type}</h3>
                        <p className="ticket-price">{ticket.price}</p>
                        <ul>
                            {ticket.features.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <button
                            style={{ backgroundColor: ticket.color }}
                            onClick={handleBookNow}
                        >
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TicketCards;