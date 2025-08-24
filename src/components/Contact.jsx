
import '../css/Contact.css';

const PHONE = '+919763361236';

export default function Contact() {
  return (
    <section id="contact" className="contact-banner">

      <div className="contact-text">
        <h2>Call us today to book an appointment.</h2>
        <p>
          Quick, friendly assistance 11 AM – 10 PM.<br />
          Prefer texting? Drop us a WhatsApp message and get a reply within minutes!
        </p>
      </div>


      <div className="cta-wrapper">
        <a
          href={`tel:${PHONE}`}
          className="cta-btn call-btn"
          aria-label="Call clinic"
        >
          Call {PHONE}
        </a>

        <a
          href={`https://wa.me/${PHONE.replace('+', '')}`}
          className="cta-btn wa-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}
