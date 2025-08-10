import '../css/Footer.css';
import logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand / logo */}
        <div className="brand">
          <img 
            src={logo} 
            alt="Varad Clinic - Holistic Homeopathic Care" 
            className="footer-logo"
          />

        </div>

        {/* Quick Links - MOVED TO FIRST */}
        <div className="footer-col">
          <h4>Quick&nbsp;Links</h4>
          <ul className="quick-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>

        {/* Call Us - SECOND */}
        <div className="footer-col">
          <h4>Call&nbsp;Us</h4>
          <a href="tel:+919763361236">+91&nbsp;9763&nbsp;361&nbsp;236</a>
          <a href="tel:+919881837313">+91&nbsp;9881&nbsp;837&nbsp;313</a>
        </div>

        {/* Reach Us - THIRD */}
        <div className="footer-col">
          <h4>Reach&nbsp;Us</h4>
          <p>
            Varad Clinic, Rajgruha bungalow,
            Lane No. 1, Sainagar,
            Katraj, Pune - 411048.<br/>
            Maharashtra, India.
          </p>
        </div>

        {/* Open Hours - FOURTH (LAST) */}
        <div className="footer-col">
          <h4>Open&nbsp;Hours</h4>
          <ul className="hours-list">
            <li><strong>Monday - Friday:</strong></li>
            <li>• 12:00 PM - 3:00 PM (Appointments Only)</li>
            <li>• 6:00 PM - 9:00 PM</li>
            <li><strong>Saturday:</strong> By Appointment Only</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Varad Clinic</p>
      </div>
    </footer>
  );
}
