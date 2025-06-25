import React, { useState } from 'react';
import './QuickLinks.css';

const links = [
  {
    icon: 'fas fa-swimmer',
    title: 'Water Rides',
    description: 'Explore Thrilling Water Slides & Splash Zones',
    link: '/water',
    disabled: false
  },
  {
    icon: 'fas fa-ticket-alt',
    title: 'Book Tickets',
    description: 'Skip the Queue by Booking Online',
    link: '/tickets',
    disabled: false
  },
  {
    icon: 'fas fa-map-marked-alt',
    title: 'How to Reach',
    description: 'Navigate your Way to the Fun Zone',
    link: '/directions',
    disabled: true
  },
  {
    icon: 'fas fa-utensils',
    title: 'Food Court',
    description: 'Taste the Flavors of Fun',
    link: '/food',
    disabled: true
  },
  {
    icon: 'fas fa-child',
    title: 'Kids Zone',
    description: 'Safe & Joyful Zones for Little Champs',
    link: '/kids-zone',
    disabled: true
  },
  {
    icon: 'fas fa-clock',
    title: 'Park Timings',
    description: 'Plan your Perfect Visit',
    link: '/timings',
    disabled: true
  },
  {
    icon: 'fas fa-camera-retro',
    title: 'Gallery',
    description: 'Capture Memories that Last Forever',
    link: '/Gallery',
    disabled: true
  },
  {
    icon: 'fas fa-phone',
    title: 'Contact Support',
    description: 'We’re here to Help you Anytime.',
    link: '/contact',
    disabled: false
  },
];

const faqData = [
  {
    question: "Is WaterPark Open?",
    answer: "Yes, WaterPark is open throughout the Year, Timings may Differ on Weekends & Holidays."
  },
  {
    question: "How much do WaterPark Theme Park Tickets Cost?",
    answer: "Ticket prices vary by Day, Group Size & Combo Offers, Visit the Ticket Page for Latest Pricing."
  },
  {
    question: "Do you need to book WaterPark Tickets in Advance?",
    answer: "Advance booking is Recommended for Faster Entry & to avoid Sold-out Days."
  },
  {
    question: "Can we buy Tickets directly at WaterPark Theme Park Ticket Counter?",
    answer: "Yes, Tickets are Available at the Park Gate, but Online Booking is Faster & Safer."
  },
  {
    question: "Does WaterPark Ticket Include Food?",
    answer: "No, Food is not Included by Default, but Combo Deals are Sometimes Available."
  },
  {
    question: "What is WaterPark Theme Park Gold Pass Ticket?",
    answer: "It’s a Fast pass to Skip Queues on popular rides, Limited Quantities Available Daily."
  },
  {
    question: "Are Cameras allowed in WaterPark?",
    answer: "Yes, but Some rides may Restrict Photography for Safety Reasons."
  },
  {
    question: "Is Water Bottle allowed in WaterPark?",
    answer: "Yes, you can Carry Sealed Water Bottles Inside the Park."
  },
  {
    question: "Are there First-aid Facilities?",
    answer: "Yes, Trained medical staff & a Dedicated first-aid room are Available in Case of Emergencies."
  },
  {
    question: "What are the Parking Charges?",
    answer: "Parking charges vary based on Vehicle type, General Parking is ₹200 and VIP parking is ₹450."
  },
  {
    question: "Are there Locker Facilities Available?",
    answer: "Yes, Secure Lockers are Available for Rent to Store your Personal Belongings."
  },
  {
    question: "What should we wear to WaterPark?",
    answer: "Comfortable Swim-wear is recommended, Nylon or Lycra clothing is ideal for water rides."
  },
];

function QuickLinks() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (item) => {
    if (item.disabled) {
      setToastMsg(`${item.title} is Coming Soon !!!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } else {
      window.location.href = item.link;
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="quicklinks-page-container">
      <h1 className="quicklinks-heading">🎢 Quick Links</h1>

      <div className="quicklinks-grid">
        {links.map((item, index) => (
          <div
            className={`quicklinks-card ${item.disabled ? 'disabled' : ''}`}
            key={index}
            title={item.disabled ? 'Coming Soon' : ''}
            onClick={() => handleClick(item)}
          >
            <i className={item.icon}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="faq-section">
        <h2 className="faq-heading">📌 Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {activeIndex === index ? '▼' : '▶'} {item.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showToast && (
        <div className="custom-toast">
          {toastMsg}
        </div>
      )}
    </div>
  );
}

export default QuickLinks;
