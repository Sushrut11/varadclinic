import '../css/About.css';

export default function About() {
  return (
    <section id="about" className="about-doctors-section">
      <div className="about-heading">
        <h2>Meet Our Expert Team</h2>
        <p>Experienced medical professionals dedicated to your health and wellness</p>
      </div>

      {/* Dr. Manisha Ursal */}
      <div className="doctor-card doctor-row mom-row">
        <div className="doctor-text">
          <h3>Dr. Manisha Ursal</h3>
          <div className="qualification">B.H.M.S</div>
          <div className="designation">Homeopathic Consultant</div>
          <p>
          I specialize in classical homeopathic medicine, providing gentle and natural healing solutions for families.<br/> My compassionate approach to homeopathic consulting focuses on treating the root cause of ailments, offering <br/>personalized remedies that restore balance and promote holistic wellness for patients of all ages with care and<br/> dedication.
          </p>
        </div>
        <div className="doctor-img-box mom-img">
          {/* Use alt and correct src for actual images */}
          <img src="/images/M.jpg" alt="Dr. Manisha Ursal" />
        </div>
      </div>

      {/* Dr. P. M. Ursal */}
      <div className="doctor-card doctor-row dad-row">
        <div className="doctor-img-box dad-img">
          <img src="/images/D.jpeg" alt="Dr. P. M. Ursal" />
        </div>
        <div className="doctor-text">
          <h3>Dr. P. M. Ursal</h3>
          <div className="qualification">B.A.M.S</div>
          <div className="designation">General Practitioner</div>
          <p>
          With over 20 years of dedicated medical practice, I bring extensive expertise in General Medicine and Ayurvedic treatments. My comprehensive approach combines traditional Ayurvedic wisdom with modern medical knowledge, providing complete family healthcare services with warmth, professionalism, and deep commitment to patient wellbeing and healing.
          </p>
        </div>
      </div>
    </section>
  );
}
