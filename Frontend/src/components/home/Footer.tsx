// components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/college">College Studies</Link></li>
              <li><Link to="/abroad">Abroad Studies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Education, Dharmapuri (தர்மபுரி)</li>
              <li><i className="fas fa-phone"></i> <a href="tel:+916380539537">+91 63805 39537</a></li>
              <li><i className="fas fa-envelope"></i> <a
                  href="mailto:technofoundation100@gmail.com">technofoundation100@gmail.com</a></li>
              <li><i className="fas fa-clock"></i> Mon-Sun: 9AM - 6PM</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/1234567890"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Register For Your College</h3>
            <form className="newsletter-form">
              <Link to="/contact"><button type="button">Register</button></Link>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;