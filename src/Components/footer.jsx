import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing the best web solutions. Follow us on
            our social media platforms for updates and news.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">F</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">T</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">I</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">L</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;