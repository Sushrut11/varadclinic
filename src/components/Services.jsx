import '../css/Services.css';

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Homeopathic Consulting", 
      description: "Personalized homeopathic treatments for chronic and acute conditions using natural remedies."
    },
    {
      number: "02",
      title: "Family Physician",
      description: "Comprehensive primary healthcare services for patients of all ages with preventive care focus."
    },
    {
      number: "03", 
      title: "Children Care",
      description: "Specialized pediatric care with gentle treatments designed specifically for growing children."
    },
    {
      number: "04",
      title: "Diagnostic Tests", 
      description: "Complete blood work, urine analysis, and other essential diagnostic services on-site."
    },
    {
      number: "05",
      title: "Women's Health",
      description: "Holistic healthcare solutions addressing women's specific health concerns and wellness needs."
    },
    {
      number: "06",
      title: "Lifestyle Counseling",
      description: "Expert guidance on nutrition, stress management, and healthy lifestyle modifications."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-grid">
          {/* Header area - spans 2 columns in first row */}
          <div className="header-area">
            <h2 className="services-main-title">Your Health, Our Priority</h2>
            <p className="services-description">
              At Varad Clinic, we blend traditional wisdom with modern healthcare to provide 
              comprehensive treatment for you and your family. <strong>Monday - Friday: 12:00 PM - 3:00 PM (Appointments Only), 6:00 PM - 9:00 PM | Saturday: By Appointment Only | Sunday: Closed.</strong> Along with our specialized homeopathic treatments, 
              we offer a complete range of general physician services under one roof.
            </p>
          </div>

          {/* Service cards - fill remaining 6 grid spots */}
          {services.map((service) => (
            <div key={service.number} className="service-card">
              <div className="service-number">{service.number}</div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
