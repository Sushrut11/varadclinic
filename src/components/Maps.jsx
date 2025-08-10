import "../css/Maps.css";

export default function Maps() {
  return (
    <section className="map-strip">
      <div className="map-header">
        <h2>We're Here for You</h2>
        <p>Click the map for directions to our clinic</p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5993400697457!2d73.873739!3d18.456492000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb003d3834a7%3A0x4ab091e6a22fcad9!2sVARAD%20CLINIC!5e0!3m2!1sen!2sin!4v1754654033099!5m2!1sen!2sin"
          width="100%"
          height="370"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Varad Clinic Location"
        />

        <a
          href="https://maps.app.goo.gl/mwU6y6KvZ4GTSDf68"
          target="_blank"
          rel="noopener noreferrer"
          className="map-overlay"
          aria-label="Open clinic location in Google Maps"
        >
          <span className="sr-only">Click for directions to our clinic</span>
        </a>
      </div>
    </section>
  );
}
