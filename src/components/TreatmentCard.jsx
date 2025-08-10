import PropTypes from 'prop-types';
import '../css/Treatments.css';

export default function TreatmentCard({ name, desc }) {
  return (
    <div className="treatment-card" tabIndex="0">
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}

/* Prop-type safety so you catch typos in dev */
TreatmentCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};