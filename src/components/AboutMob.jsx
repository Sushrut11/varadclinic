import '../css/AboutMob.css';

export default function AboutMob() {
  return (
    <section id="mob_about" className="aboutmob-section">
      <div className="aboutmob-heading">
        <h2>Meet Our Expert Team</h2>
        <p>Experienced medical professionals dedicated to your health and wellness</p>
      </div>

      <div className="aboutmob-card">
        <div className="aboutmob-photo">
          <img src="/images/M.jpg" alt="Dr. Manisha Ursal" />
        </div>
        <div className="aboutmob-header-text">
          <span className="aboutmob-name">Dr. Manisha Ursal</span>
          <span className="aboutmob-degree">B.H.M.S</span>
          <span className="aboutmob-designation">Homeopathic Consultant</span>
        </div>
        <div className="aboutmob-description">
        I specialize in classical homeopathic medicine, providing gentle and natural healing solutions for families. My compassionate approach to homeopathic consulting focuses on treating the root cause of ailments, offering personalized remedies that restore balance and promote holistic wellness for patients of all ages with care and dedication.
        </div>
      </div>

      <div className="aboutmob-card">
        <div className="aboutmob-photo">
          <img src="/images/D.jpeg" alt="Dr. P. M. Ursal" />
        </div>
        <div className="aboutmob-header-text">
          <span className="aboutmob-name">Dr. P. M. Ursal</span>
          <span className="aboutmob-degree">B.A.M.S</span>
          <span className="aboutmob-designation">General Practitioner</span>
        </div>
        <div className="aboutmob-description">
        With over 20 years of dedicated medical practice, I bring extensive expertise in General Medicine and Ayurvedic treatments. My comprehensive approach combines traditional Ayurvedic wisdom with modern medical knowledge, providing complete family healthcare services with warmth, professionalism, and deep commitment to patient wellbeing and healing.
        </div>
      </div>
    </section>
  );
}
