import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <li><Link to="/theme">Theme Park</Link></li>
                <li><Link to="/water">Water Park</Link></li>
                <li><Link to="/tickets">Tickets & Offers</Link></li>
                <li><Link to="/snow">Snow World</Link></li>
                <li><Link to="/quick">Quick Links</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </div>
            <div className="footer-socials">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
