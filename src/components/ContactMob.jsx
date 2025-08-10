import '../css/ContactMob.css';
const PHONE = '+919763361236';

export default function ContactMob(){
  return (
    <section id="mob_contact" className="contact-mob">
      <h2>Call us today to book an appointment.</h2>

      <p>
        Quick, friendly assistance 11 AM – 10 PM.<br/>
        Prefer texting? Drop us a WhatsApp message and get a reply within minutes!
      </p>

      <a href={`tel:${PHONE}`} className="mob-btn call-btn">Call {PHONE}</a>
      <a href={`https://wa.me/${PHONE.replace('+','')}`}
         className="mob-btn wa-btn"
         target="_blank" rel="noopener noreferrer">
         Message on WhatsApp
      </a>
    </section>
  );
}
